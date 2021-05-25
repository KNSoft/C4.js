import AJAX from './AJAX.js';

var Load = function (opt) {
    var newOpt = opt.Clone();
    if (newOpt.OnSuccess) {
        newOpt.OnSuccess = function (xhr) {
            opt.OnSuccess(xhr.responseText);
        }
    }
    return AJAX(newOpt);
};

Load.JSON = function (opt) {
    var newOpt = opt.Clone();
    if (opt.OnSuccess)
        newOpt.OnSuccess = function (xhr) {
            var result;
            try {
                result = JSON.parse(xhr.responseText);
            } catch (e) {
                if (opt.OnError)
                    opt.OnError(e.name, e.number, e.message);
                return;
            }
            opt.OnSuccess(result);
        }
    return AJAX(newOpt);
};

Load.JS = function (opt) {
    var newOpt = opt.Clone();
    newOpt.OnSuccess = function (xhr) {
        var result = eval(xhr.responseText);
        if (opt.OnSuccess)
            opt.OnSuccess(result);
    };
    return AJAX(newOpt);
};

Load.CSS = function (opt) {
    var newOpt = opt.Clone();
    newOpt.OnSuccess = function (xhr) {
        var styleNode = document.createElement('style');
        styleNode.innerHTML = xhr.responseText;
        if (opt.OnSuccess)
            opt.OnSuccess(styleNode);
    };
    return AJAX(newOpt);
};

Load.HTML = function (opt, target) {
    var newOpt = opt.Clone();
    newOpt.OnSuccess = function (xhr) {
        if (target) {
            target.innerHTML = xhr.responseText;
            target.ReloadScript();
        }
        if (opt.OnSuccess)
            opt.OnSuccess(xhr.responseText);
    };
    return AJAX(newOpt);
};

export default Load;