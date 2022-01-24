/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Object_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _Object_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Object_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _String_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _String_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_String_js__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),
/* 2 */
/***/ (function() {

if (typeof Object.assign !== 'function') {
    Object.defineProperty(Object, 'assign', {
        value: function (target, sources) {
            if (target === null || target === undefined)
                throw new TypeError('Cannot convert undefined or null to object');
            var obj = Object(target);
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                if (source !== null && source !== undefined)
                    for (var prop in source)
                        if (Object.prototype.hasOwnProperty.call(source, prop))
                            obj[prop] = source[prop];
            }
            return obj;
        },
        writable: true,
        configurable: true
    });
}

/***/ }),
/* 3 */
/***/ (function() {

if (!String.prototype.endsWith)
    String.prototype.endsWith = function (searchString, endPosition) {
        if (endPosition === undefined || endPosition > this.length)
            endPosition = this.endPosition;
        return endPosition >= searchString.length ? this.lastIndexOf(searchString) === endPosition - searchString.length : false;
    };

if (!String.prototype.startsWith)
    String.prototype.startsWith = function (searchString, position) {
        position = !position || position < 0 ? 0 : position;
        return this.indexOf(searchString) === position;
    };

/***/ }),
/* 4 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _Common_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Common_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Object_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _Object_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Object_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _String_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _String_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_String_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Date_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _Date_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Date_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _HTMLElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _HTMLAnchorElement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13);
/* harmony import */ var _HTMLAnchorElement_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_HTMLAnchorElement_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _HTMLImageElement_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14);
/* harmony import */ var _HTMLImageElement_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_HTMLImageElement_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _HTMLTableElement_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15);
/* harmony import */ var _HTMLTableElement_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_HTMLTableElement_js__WEBPACK_IMPORTED_MODULE_7__);









/***/ }),
/* 5 */
/***/ (function() {

Array.prototype.Each = HTMLCollection.prototype.Each = NodeList.prototype.Each = function (func) {
    for (var i = 0; i < this.length; i++)
        if (func(this[i], i) === false)
            break;
    return i;
};

/***/ }),
/* 6 */
/***/ (function() {

Object.prototype.Attr = function (opt) {
    for (var prop in opt)
        if (Object.prototype.hasOwnProperty.call(opt, prop))
            this[prop] = (typeof opt[prop] === 'object' && typeof this[prop] !== 'object' && opt[prop].Clone) ? this[prop] = opt[prop].Clone() : opt[prop];
};

Object.prototype.EachProp = function (func) {
    for (var prop in this)
        if (Object.prototype.hasOwnProperty.call(this, prop) && func(prop, this[prop]) === false)
            break;
};

Object.prototype.Clone = function () {
    var obj = {};
    for (var prop in this)
        if (Object.prototype.hasOwnProperty.call(this, prop))
            obj[prop] = (typeof this[prop] === 'object' && this[prop].Clone) ? this[prop].Clone() : this[prop];
    return obj;
};

/***/ }),
/* 7 */
/***/ (function() {

// eval()
String.prototype.Eval = function () {
    return Function('return (' + this + ');')();
};

// Determines the string is a valid float format
String.prototype.IsFloat = function () {
    return (/^([-|+]?\d+)(\.\d+)?$/).test(this);
};

// Determines the string is a valid unsigned float format
String.prototype.IsUFloat = function () {
    return (/^(\+?\d+)(\.\d+)?$/).test(this);
};

// Determines the string is a valid integer format
String.prototype.IsInt = function () {
    return (/^([-|+]?\d+)$/).test(this);
};

// Determines the string is a valid unsigned integer format
String.prototype.IsUInt = function () {
    return (/^(\+?\d+)$/).test(this);
};

// Encodes string by encodeURIComponent() twice
String.prototype.EncodeTwice = function () {
    return encodeURIComponent(encodeURIComponent(this));
};

// Encodes HTML entity chars in the string
String.prototype.EncodeHTML = function () {
    var str = '';
    for (var i = 0; i < this.length; i++) {
        var ch = this.charAt(i);
        if (ch === '<')
            str += '&lt;';
        else if (ch === '>')
            str += '&gt;';
        else if (ch === ' ')
            str += '&nbsp;';
        else if (ch === '&')
            str += '&amp;';
        else if (ch === '"')
            str += '&quot;';
        else
            str += ch;
        return str;
    };
};

/***/ }),
/* 8 */
/***/ (function() {

// Converts date object to string in 'YYYY-MM-DDTHH:MM:SS' format
Date.prototype.ToDTLString = function () {
    return this.getFullYear() + '-' +
        ('0' + (this.getMonth() + 1)).slice(-2) + '-' +
        ('0' + this.getDate()).slice(-2) + 'T' +
        ('0' + this.getHours()).slice(-2) + ':' +
        ('0' + this.getMinutes()).slice(-2) + ':' +
        ('0' + this.getSeconds()).slice(-2);
};

/***/ }),
/* 9 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _VDOM_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);



HTMLElement.prototype.HasClass = function (name) {
    var classes = this.className.split(' ');
    for (var i = 0; i < classes.length; i++)
        if (classes[i] === name)
            return true;
    return false;
};

HTMLElement.prototype.AppendClass = function (name) {
    if (!this.HasClass(name))
        if (this.className)
            this.className += (' ' + name);
        else
            this.className = name;
};

HTMLElement.prototype.RemoveClass = function (name) {
    var classes = this.className.split(' ');
    for (var i = 0; i < classes.length; i++)
        if (classes[i] === name) {
            classes.splice(i, 1);
            if (classes.length === 0)
                this.removeAttribute('class');
            else
                this.className = classes.join(' ');
            break;
        }
};

HTMLElement.prototype.ReloadScript = function () {
    var scriptAttrs = ['type', 'src', 'nonce', 'noModule'];
    var scripts = this.getElementsByTagName('script');
    for (var i = 0; i < scripts.length; i++) {
        var scriptParent = scripts[i].parentNode;
        var oldScript = scriptParent.removeChild(scripts[i]),
            newScript = document.createElement('script');
        for (var j = 0; j < scriptAttrs.length; j++) {
            var propVal = oldScript.getAttribute(scriptAttrs[j]);
            if (propVal)
                newScript.setAttribute(scriptAttrs[j], propVal);
        }
        newScript.innerHTML = oldScript.innerHTML;
        scriptParent.appendChild(newScript);
    }
};

HTMLElement.prototype.Partial = function (opt) {
    _Load_js__WEBPACK_IMPORTED_MODULE_0__.default.HTML(opt, this);
};

HTMLElement.prototype.AppendChild = function (opt) {
    return this.appendChild((0,_VDOM_js__WEBPACK_IMPORTED_MODULE_1__.default)(opt));
}

/***/ }),
/* 10 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AJAX_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);


var Load = function (opt) {
    var newOpt = opt.Clone();
    if (newOpt.OnSuccess) {
        newOpt.OnSuccess = function (xhr) {
            opt.OnSuccess(xhr.responseText);
        }
    }
    return (0,_AJAX_js__WEBPACK_IMPORTED_MODULE_0__.default)(newOpt);
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
    return (0,_AJAX_js__WEBPACK_IMPORTED_MODULE_0__.default)(newOpt);
};

Load.JS = function (opt) {
    var newOpt = opt.Clone();
    newOpt.OnSuccess = function (xhr) {
        var result = eval(xhr.responseText);
        if (opt.OnSuccess)
            opt.OnSuccess(result);
    };
    return (0,_AJAX_js__WEBPACK_IMPORTED_MODULE_0__.default)(newOpt);
};

Load.CSS = function (opt) {
    var newOpt = opt.Clone();
    newOpt.OnSuccess = function (xhr) {
        var styleNode = document.createElement('style');
        styleNode.innerHTML = xhr.responseText;
        if (opt.OnSuccess)
            opt.OnSuccess(styleNode);
    };
    return (0,_AJAX_js__WEBPACK_IMPORTED_MODULE_0__.default)(newOpt);
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
    return (0,_AJAX_js__WEBPACK_IMPORTED_MODULE_0__.default)(newOpt);
};

/* harmony default export */ __webpack_exports__["default"] = (Load);

/***/ }),
/* 11 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (AJAX);

/***/ }),
/* 12 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
    opt = {
        Type: 'div',            // Tag name of new element, lowercase is recommended
        Props: {                // Optional, properties of new element
            innerHTML: 'Text',
            style: {
                color: '#F00'
            }
        },
        Children: [
            {             // Optional, child nodes of new element
                Type: 'span'
            }
        ]
    }
*/

var VDOM = function (opt) {
    var VNODE = document.createElement(opt.Type);
    if (opt.Props)
        VNODE.Attr(opt.Props);
    if (opt.Children)
        for (var i = 0; i < opt.Children.length; i++)
            VNODE.appendChild(VDOM(opt.Children[i]));
    return VNODE;
};

/* harmony default export */ __webpack_exports__["default"] = (VDOM);

/***/ }),
/* 13 */
/***/ (function() {

HTMLAnchorElement.prototype.SafeExt = function () {
    if (this.origin && this.origin != location.origin) {
        this.rel = 'noopener noreferrer';
        this.target = '_blank';
    }
}

/***/ }),
/* 14 */
/***/ (function() {



/***/ }),
/* 15 */
/***/ (function() {

// count > 0: Deletes last `count` rows
// count < 0: Deletes last items until `count` rows remains
HTMLTableElement.prototype.DeleteLastRows = function(count) {
    var nRows = this.rows.length;
    var nStart, nCount;
    if (count < 0) {
        nStart = -count;
        nCount = nRows - nStart;
    } else {
        nStart = nRows - count;
        nCount = count;
    }
    for (var i = 0; i < nCount; i++)
        this.deleteRow(nStart);
}

/***/ }),
/* 16 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// import CSSContent from './css/Main.css'

var CSS = {
    LoadDefault: function () {
        /*
        var node = document.createElement('style');
        node.innerHTML = CSSContent;
        return document.getElementsByTagName('head')[0].appendChild(node);
        */
    },
    Theme: {
        themeEle: null,
        themeDir: null,
        Set: function (theme) {
            if (this.themeEle && this.themeDir)
                this.themeEle.href = this.themeDir + theme + '.css';
        },
        Init: function (dir, theme) {
            if (!this.themeEle) {
                this.themeEle = document.getElementsByTagName('head')[0].AppendChild({
                    Type: 'link',
                    Props: {
                        rel: 'stylesheet'
                    }
                });
            }
            this.themeDir = dir;
            if (theme)
                this.Set(theme);
        }
    }
};

/* harmony default export */ __webpack_exports__["default"] = (CSS);

/***/ }),
/* 17 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Cookie = {
    /*
        opt = {
            Name: 'Cookie1',    // Name of cookie
            Value: 'Value1',    // Value of cookie
            Path: 'Path',       // Optional, path of cookie
            ExpireDays: 30,     // Optional, number of valid days, or Infinity for never expires
        }
    */
    Set: function(opt) {
        var exp, expStr;
        if (opt.ExpireDays === Infinity) {
            expStr = 'Fri, 31 Dec 9999 23:59:59 GMT';
        } else if (opt.ExpireDays) {
            exp = new Date();
            exp.setTime(exp.getTime() + opt.ExpireDays * 86400000);
            expStr = exp.toUTCString();
        }
        document.cookie = opt.Name + '=' + encodeURIComponent(opt.Value) + (expStr ? ';expires=' + expStr : '') + (opt.Path ? ';path=' + opt.Path : '');
    },
    Get: function(name) {
        for (var ck, i = 0, cks = document.cookie.split('; '); i < cks.length; i++) {
            ck = cks[i].split('=');
            if (ck[0] === name)
                return decodeURIComponent(ck[1]);
        }
    },
    Delete: function(name, path) {
        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT' + (path ? ';path=' + path : '');
    }
};

/* harmony default export */ __webpack_exports__["default"] = (Cookie);

/***/ }),
/* 18 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AJAX_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);


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
    return (0,_AJAX_js__WEBPACK_IMPORTED_MODULE_0__.default)(newOpt);
};

/* harmony default export */ __webpack_exports__["default"] = (API);

/***/ }),
/* 19 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var SPA = {
    ResolveRouter: function (routerPath) {
        var path = window.location.pathname;
        if (path[path.length - 1] != '/')
            path += '/';
        if (path.indexOf(routerPath) == 0) {
            path = path.substr(routerPath.length);
            return path;
        }
    },
    ATagRouterHandler: function (e) {
        return false;
    },
    SetRouter: function (aTag) {
        aTag.onclick = this.ATagRouterHandler;
    }
};

HTMLAnchorElement.prototype.SetSPARouter = function () {
    SPA.SetRouter(this);
};

/* harmony default export */ __webpack_exports__["default"] = (SPA);

/***/ }),
/* 20 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);


var I18N = {
    Init: function (opt) {
        var str;
        if (opt.Lang && opt.SupportLang.indexOf(opt.Lang) !== -1)
            this.Lang = opt.Lang;
        else {
            var browserLang = navigator.language || navigator.browserLanguage;
            for (var i = 0; i < opt.SupportLang.length; i++)
                if (browserLang.indexOf(opt.SupportLang[i]) !== -1) {
                    this.Lang = opt.SupportLang[i];
                    break;
                }
            if (this.Lang === undefined) {
                str = browserLang.substring(0, browserLang.indexOf('-'));
                for (var i = 0; i < opt.SupportLang.length; i++)
                    if (opt.SupportLang[i].indexOf(str) !== -1) {
                        this.Lang = opt.SupportLang[i];
                        break;
                    }
            }
            if (this.Lang === undefined)
                this.Lang = opt.SupportLang[0];
            else
                this.DefLang = opt.SupportLang[0];
        }
    },
    Load: function (opt) {
        return _Load_js__WEBPACK_IMPORTED_MODULE_0__.default.JSON({
            URL: opt.Dir + I18N.Lang + '.json',
            OnSuccess: opt.OnSuccess,
            OnError: function (errName, errNum, errMsg) {
                if (errName === 'HTTP' && errNum == 404 && I18N.DefLang && I18N.DefLang !== I18N.Lang)
                    _Load_js__WEBPACK_IMPORTED_MODULE_0__.default.JSON({
                        URL: opt.Dir + I18N.DefLang + '.json',
                        OnSuccess: opt.OnSuccess,
                        OnError: opt.OnError
                    });
                else if (opt.OnError)
                    opt.OnError(errName, errNum, errMsg)
            }
        });
    },
    Apply: function (ele, obj) {
        var key = ele.getAttribute('data-i18n');
        if (key)
            ele.innerHTML = obj[key];
        else {
            var eles = ele.getElementsByClassName('c4-i18n');
            for (var i = 0; i < eles.length; i++) {
                key = eles[i].getAttribute('data-i18n') || eles[i]['data-i18n'] || eles[i].id;
                if (key && obj[key])
                    eles[i].innerHTML = obj[key];
            }
        }
    }
};

HTMLElement.prototype.I18N = function (obj) {
    I18N.Apply(this, obj);
}

/* harmony default export */ __webpack_exports__["default"] = (I18N);

/***/ }),
/* 21 */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var CTL = {
    Shadow: function(display) {
        var eles = document.getElementsByClassName('c4-shadow');
        for (var i = 0; i < eles.length; i++)
            eles[i].style.display = display ? 'block' : 'none';
    },
    DoModal: function(id) {
        if (this.currentModal) {
            this.currentModal.style.display = 'none';
        } else {
            this.Shadow(true);
        }
        this.currentModal = document.getElementById(id);
        this.currentModal.style.display = 'block';
    },
    EndModal: function() {
        if (this.currentModal) {
            this.currentModal.style.display = 'none';
            this.Shadow(false);
            this.currentModal = undefined;
        }
    }
};

/* harmony default export */ __webpack_exports__["default"] = (CTL);

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Polyfill_Main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _NativeExt_Main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _CSS_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
/* harmony import */ var _Cookie_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17);
/* harmony import */ var _VDOM_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);
/* harmony import */ var _AJAX_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11);
/* harmony import */ var _Load_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10);
/* harmony import */ var _API_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(18);
/* harmony import */ var _SPA_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19);
/* harmony import */ var _I18N_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(20);
/* harmony import */ var _CTL_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(21);












var C4 = function(id) {
    return document.getElementById(id);
};

C4.CSS = _CSS_js__WEBPACK_IMPORTED_MODULE_2__.default;
C4.Cookie = _Cookie_js__WEBPACK_IMPORTED_MODULE_3__.default;
C4.VDOM = _VDOM_js__WEBPACK_IMPORTED_MODULE_4__.default;
C4.AJAX = _AJAX_js__WEBPACK_IMPORTED_MODULE_5__.default;
C4.Load = _Load_js__WEBPACK_IMPORTED_MODULE_6__.default;
C4.API = _API_js__WEBPACK_IMPORTED_MODULE_7__.default;
C4.SPA = _SPA_js__WEBPACK_IMPORTED_MODULE_8__.default;
C4.I18N = _I18N_js__WEBPACK_IMPORTED_MODULE_9__.default;
C4.CTL = _CTL_js__WEBPACK_IMPORTED_MODULE_10__.default;

window.C4 = C4;

/* harmony default export */ __webpack_exports__["default"] = (C4);
}();
/******/ })()
;