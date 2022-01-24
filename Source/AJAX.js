/*
    opt = {
        Method: 'POST',                             // Optional, HTTP method of XHR used, default value is 'GET'
        URL: '1.php',                               // URL to request
        Async: true,                                // Optional, set to false to perform a synchronous request
        Headers: {                                  // Optional, set additional HTTP headers
            'X-MyHeader': 'MyHeader'
        },
        Timeout: 5000,                              // Optional, timeout for the request, in milliseconds
        OnTimeout: function (xhr) {...},            // Optional, callback for timeout
        OnChange: function (xhr) {...},             // Optional, callback for ready state changed
        OnComplete: function (xhr) {...},           // Optional, callback for request completed
        OnSuccess: function (xhr) {...},            // Optional, callback for request succeeded
        OnError: function (name, code, text) {...}, // Optional, callback for encounter an error
        OnProgress: function (loaded, total) {...}, // Optional, callback for data received
        Body: 'key1=value1&key2=value2'             // Optional, HTTP body of XHR send
    }
*/

var AJAX = function (opt) {
    var xhr = new XMLHttpRequest();
    var pace = {
        xhr: xhr,
        total: 0,
        loaded: 0
    };
    AJAX.Pace.Add(pace);
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
    xhr.onprogress = function (e) {
        if (opt.OnProgress)
            opt.OnProgress(e.loaded, e.total);
        if (AJAX.Pace.Callback) {
            pace.total = e.total || Number(xhr.getResponseHeader('Content-Length'));
            if (pace.total) {
                pace.loaded = e.loaded;
                AJAX.Pace.Update();
            }
        }
    };
    try {
        xhr.send(opt.Body);
    } catch (e) {
        opt.OnError(e.name, e.number, e.message);
    }
    return xhr;
};

AJAX.Pace = {
    /*
        paceObj = {
            xhr: xhr,   // XMLHttpRequest object
            total: 0,   // Total bytes in progress
            loaded: 0   // Loaded bytes in progress
        }
    */
    Queue: [],
    Callback: null,
    Add: function (pace) {
        if (this.Callback)
            this.Queue.push(pace);
    },
    PrevUpdatedPace: null,
    Update: function () {
        if (this.Callback) {
            var pace = this.Queue[0];
            while (pace) {
                if (pace.xhr.readyState > 3) {
                    this.Queue.splice(0, 1);
                    pace = this.Queue[0];
                    continue;
                }
                this.Callback(pace.loaded, pace.total, pace != this.PrevUpdatedPace);
                this.PrevUpdatedPace = pace;
                break;
            }
        }
    }
};

export default AJAX;