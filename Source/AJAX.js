/*
    opt = {
        Method: 'POST',                             // Optional, HTTP method of XHR used, default value is 'GET'
        URL: '1.php',                               // URL to request
        Async: true,                                // Optional, set to false to perform a synchronous request
        Headers: {                                  // Optional, set additional HTTP headers
            'X-MyHeader': 'MyHeader'
        },
        Timeout: 5000,                              // Optional, timeout for the request, in milliseconds
        OnChange: function (xhr) {...},             // Optional, callback for ready state changed
        OnComplete: function (xhr) {...},           // Optional, callback for request completed
        OnSuccess: function (xhr) {...},            // Optional, callback for request succeeded
        OnError: function (name, code, text) {...}, // Optional, callback for encounter an error
        OnProgress: function (loaded, total) {...}, // Optional, callback for data received
        Body: 'key1=value1&key2=value2'             // Optional, HTTP body of XHR send
    }
*/

var AJAX = function (opt) {
    var xhr = new XMLHttpRequest(), total = 0;
    xhr.open(opt.Method || 'GET', opt.URL, opt.Async !== false);
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    if (opt.File) {
        xhr.setRequestHeader('Content-Type', 'multipart/form-data');
    } else if (opt.Method === 'POST')
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    if (opt.Headers)
        for (var prop in opt.Headers)
            if (Object.prototype.hasOwnProperty.call(opt.Headers, prop))
                xhr.setRequestHeader(prop, opt.Headers[prop]);
    if (opt.Timeout)
        setTimeout(function () {
            if (xhr.readyState !== 4) {
                xhr.abort();
                if (opt.OnTimeout)
                    opt.OnTimeout(xhr);
            }
        }, opt.Timeout);
    xhr.onreadystatechange = function () {
        if (opt.OnChange)
            opt.OnChange(xhr);
        if (xhr.readyState === 4) {
            if (opt.OnComplete)
                opt.OnComplete(xhr);
            if (opt.OnProgress)
                opt.OnProgress(total, total);
            if (xhr.status === 200 && opt.OnSuccess) {
                opt.OnSuccess(xhr);
            } else if (xhr.status !== 200 && opt.OnError)
                opt.OnError('HTTP', xhr.status, xhr.statusText);
        }
    };
    if (opt.OnProgress) {
        xhr.onprogress = function (e) {
            total = e.total;
            opt.OnProgress(e.loaded, e.total);
        };
    }
    try {
        xhr.send(opt.Body);
    } catch (e) {
        opt.OnError(e.name, e.number, e.message);
    }
    return xhr;
};

export default AJAX;