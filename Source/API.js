import AJAX from './AJAX.js';

/*
    opt = {
        URL: '1.php',                               // URL to request
        Method: 'POST',                             // Optional, GET or POST(default)
        Timeout: 5000,                              // Optional, timeout for the request, in milliseconds
        OnTimeout: function (xhr) {...},            // Optional, callback for timeout
        OnSuccess: function (result) {...},         // Optional, callback for request succeeded, type of result depends on OutputType
        OnError: function (name, code, text) {...}, // Optional, callback for encounter an error
        Param: {                                    // Optional, parameters send to API
            key1: value1,
            key2: value2
        }
    }
 */

var API = function(opt) {
    var newOpt = opt.Clone();
    if (!newOpt.Method)
        newOpt.Method = 'POST';
    if (newOpt.Param) {
        if (newOpt.Method == 'GET') {
            var params = [];
            for (var prop in newOpt.Param)
                if (Object.prototype.hasOwnProperty.call(newOpt.Param, prop))
                    params.push(encodeURIComponent(prop) + '=' + encodeURIComponent(newOpt.Param[prop]));
            if (params.length)
                newOpt.URL += '?' + encodeURIComponent(params.join('&'));
        } else if (newOpt.Method == 'POST' && !newOpt.Body)
            newOpt.Body = JSON.stringify(newOpt.Param);
    }
    newOpt.OnSuccess = undefined;
    newOpt.OnError = undefined;
    newOpt.OnCompleter = undefined;
    newOpt.OnChange = function(xhr) {
        if (xhr.readyState === 4) {
            if (newOpt.OnComplete)
                newOpt.OnComplete(xhr);
            if (xhr.status === 200 && opt.OnSuccess) {
                var result = xhr.responseText;
                try {
                    result = JSON.parse(result);
                } catch (e) {
                    if (opt.OnError)
                        opt.OnError(e.name, e.number, e.message);
                    return;
                }
                if (result['Code'] !== undefined) {
                    if (result['Code'] === 0)
                        opt.OnSuccess(result['RetVal'] !== undefined ? result['RetVal'] : result);
                    else if (opt.OnError)
                        opt.OnError('API', result['Code'], result['Msg'] || '');
                } else
                    opt.OnSuccess(result);
            } else if (xhr.status !== 200 && opt.OnError)
                opt.OnError('HTTP', xhr.status, xhr.statusText);
        }
    };
    return AJAX(newOpt);
};

export default API;