import AJAX from './AJAX.js';

var API = {
    /*
        opt = {
            Type: 'JSON-JSON',                          // Optional, type of I/O, possible values are ['GET', 'POST', 'JSON', 'RAW'] - ['TEXT', 'JSON', 'RAW'], default value is 'JSON-JSON'
            URL: '1.php',                               // URL to request
            Async: true,                                // Optional, set to false to perform a synchronous request
            Headers: {                                  // Optional, set additional HTTP headers
                'X-MyHeader': 'MyHeader'
            },
            Timeout: 5000,                              // Optional, timeout for the request, in milliseconds
            OnChange: function (xhr) {...},             // Optional, callback for ready state changed
            OnComplete: function (xhr) {...},           // Optional, callback for request completed
            OnSuccess: function (result) {...},         // Optional, callback for request succeeded, type of result depends on OutputType
            OnError: function (name, code, text) {...}, // Optional, callback for encounter an error
            OnProgress: function (loaded, total) {...}, // Optional, callback for data received
            Param: {                                    // Optional, parameters send to API
                key1: value1,
                key2: value2
            }
        }
    */
    Call: function (opt) {
        var newOpt = {
            URL: opt.URL,
            Async: opt.Async,
            Headers: opt.Headers,
            Timeout: opt.Timeout,
            OnChange: opt.OnChange,
            OnComplete: opt.OnComplete,
            OnError: opt.OnError,
            OnProgress: opt.OnProgress
        }, Params = [], InputType, OutputType;
        if (opt.Type) {
            var types = opt.Type.split('-', 2);
            InputType = types[0];
            OutputType = types[1];
        } else
            InputType = OutputType = 'JSON';
        if ((InputType === 'POST' || InputType === 'GET') && opt.Param) {
            for (var prop in opt.Param)
                if (Object.prototype.hasOwnProperty.call(opt.Param, prop))
                    Params.push(encodeURIComponent(prop) + '=' + encodeURIComponent(opt.Param[prop]));
            if (Params.length !== 0) {
                var Param = Params.join('&');
                if (InputType === 'GET') {
                    newOpt.URL += '?' + encodeURIComponent(Param);
                } else
                    newOpt.Body = Param;
            }
            newOpt.Method = InputType;
        } else if (InputType === 'JSON' && opt.Param) {
            newOpt.Body = JSON.stringify(opt.Param);
        } else
            newOpt.Body = opt.Param;
        if (opt.OnSuccess)
            newOpt.OnSuccess = function (xhr) {
                var result = xhr.responseText;
                if (OutputType === 'JSON') {
                    try {
                        result = JSON.parse(result);
                    } catch (e) {
                        if (opt.OnError)
                            opt.OnError(e.name, e.number, e.message);
                        return;
                    }
                }
                opt.OnSuccess(result);
            };
        return AJAX(newOpt);
    }
};

export default API;