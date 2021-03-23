/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Object_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _Object_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Object_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _String_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _String_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_String_js__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),
/* 2 */
/***/ (() => {

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
/***/ (() => {

if (!String.prototype.endsWith) {
    String.prototype.endsWith = function (searchString, endPosition) {
        if (endPosition === undefined || endPosition > this.length)
            endPosition = this.endPosition;
        return endPosition >= searchString.length ? this.lastIndexOf(searchString) === endPosition - searchString.length : false;
    };
}

if (!String.prototype.startsWith) {
    String.prototype.startsWith = function (searchString, position) {
        position = !position || position < 0 ? 0 : position;
        return this.indexOf(searchString) === position;
    };
}

/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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






/***/ }),
/* 5 */
/***/ (() => {

Array.prototype.Each = HTMLCollection.prototype.Each = function (func) {
    for (var i = 0; i < this.length; i++)
        if (func(this[i], i) === false)
            break;
    return i;
};

/***/ }),
/* 6 */
/***/ (() => {

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
/***/ (() => {

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
/***/ (() => {

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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _SPA_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);



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

HTMLElement.prototype.Load = function (opt) {
    var newOpt = opt.Clone();
    newOpt.Target = this;
    _Load_js__WEBPACK_IMPORTED_MODULE_0__.default.HTML(newOpt);
};

HTMLElement.prototype.AppendChild = function (opt) {
    return this.appendChild(C4.VDOM(opt));
}

/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

Load.HTML = function (opt) {
    var newOpt = opt.Clone();
    newOpt.OnSuccess = function (xhr) {
        if (opt.Target) {
            opt.Target.innerHTML = xhr.responseText;
            opt.Target.ReloadScript();
        }
        if (opt.OnSuccess)
            opt.OnSuccess(xhr.responseText);
    };
    return (0,_AJAX_js__WEBPACK_IMPORTED_MODULE_0__.default)(newOpt);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Load);

/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
        for (var prop in opt)
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AJAX);

/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var SPA = {
    /*
        TODO
    */
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SPA);

/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_Main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);


var CSS = {
    LoadDefault: function () {
        var node = document.createElement('style');
        node.innerHTML = _css_Main_css__WEBPACK_IMPORTED_MODULE_0__.default;
        return document.getElementsByTagName('head')[0].appendChild(node);
    }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CSS);

/***/ }),
/* 14 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Unified_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Common_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Frame_Main_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18);
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_Unified_css__WEBPACK_IMPORTED_MODULE_1__.default);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_Common_css__WEBPACK_IMPORTED_MODULE_2__.default);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_Frame_Main_css__WEBPACK_IMPORTED_MODULE_3__.default);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 15 */
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 16 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\r\n * Unified.css: 为文档和各标签提供统一的样式\r\n *\t1.\t统一的字体、字体大小、盒模型\r\n *\t2.\t不同浏览器下一致的显示\r\n *\t3.\t统一地变更个别元素原有样式\r\n */\r\n\r\n\r\n/* 全局样式 */\r\n\r\n* {\r\n\tbox-sizing: border-box;\r\n}\r\n\r\nbody {\r\n\tmargin: 0;\r\n\tfont-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\r\n\tline-height: 1.5;\r\n}\r\n\r\n\r\n/* 表单控件样式 */\r\n\r\ninput, select, textarea, button {\r\n\tfont-family: inherit;\r\n\tfont-size: inherit;\r\n\tline-height: 1.5;\r\n\toutline: none;\r\n\tpadding: .375rem;\r\n\tborder: 1px solid #000;\r\n}\r\n\r\ninput, select {\r\n\theight: calc(2.25rem + 2px);\r\n}\r\n\r\ninput[type=checkbox], input[type=radio] {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\theight: auto;\r\n\tborder: none;\r\n}\r\n\r\ninput[type=radio] {\r\n\tborder-radius: 50%;\r\n}\r\n\r\ninput[type=submit]:not(:disabled), button {\r\n\tcursor: pointer;\r\n\tbackground-color: #DDD;\r\n}\r\n\r\nlabel {\r\n\tdisplay: -ms-inline-flexbox;\r\n\tdisplay: inline-flex;\r\n\t-ms-flex-align: center;\r\n\talign-items: center;\r\n}\r\n\r\ntextarea {\r\n\tresize: none;\r\n\toverflow-y: scroll;\r\n}\r\n\r\n:disabled {\r\n\tcursor: not-allowed;\r\n\tcolor: #6D6D6D;\r\n\tbackground-color: #E5E5E5;\r\n\tborder-color: #6D6D6D;\r\n}\r\n\r\n/* 其它标签 */\r\n\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\n\r\ntable > tbody > tr > td {\r\n    padding: 0;\r\n}\r\n\r\na {\r\n\tcursor: pointer;\r\n}\r\n\r\nul {\r\n\tmargin: 0;\r\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 17 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 18 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Cookie = {
    /*
        opt = {
            Name: 'Cookie1',    // Name of cookie
            Value: 'Value1',    // Value of cookie
            Path: 'Path',       // Optional, path of cookie
            ExpireDays: 30,     // Optional, number of valid days, or Infinity for never expires
        }
    */
    Set: function (opt) {
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
    Get: function (name) {
        for (var ck, i = 0, cks = document.cookie.split('; '); i < cks.length; i++) {
            ck = cks[i].split('=');
            if (ck[0] === name)
                return decodeURIComponent(ck[1]);
        }
    },
    Delete: function (name) {
        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
    }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cookie);

/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VDOM);

/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AJAX_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);


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
        return (0,_AJAX_js__WEBPACK_IMPORTED_MODULE_0__.default)(newOpt);
    }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (API);

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
/******/ 			id: moduleId,
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
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Polyfill_Main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _NativeExt_Main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _CSS_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var _Cookie_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);
/* harmony import */ var _VDOM_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20);
/* harmony import */ var _AJAX_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11);
/* harmony import */ var _Load_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10);
/* harmony import */ var _API_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(21);
/* harmony import */ var _SPA_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12);










var C4 = function (id) {
    return document.getElementById(id);
};

C4.CSS = _CSS_js__WEBPACK_IMPORTED_MODULE_2__.default;
C4.Cookie = _Cookie_js__WEBPACK_IMPORTED_MODULE_3__.default;
C4.VDOM = _VDOM_js__WEBPACK_IMPORTED_MODULE_4__.default;
C4.AJAX = _AJAX_js__WEBPACK_IMPORTED_MODULE_5__.default;
C4.Load = _Load_js__WEBPACK_IMPORTED_MODULE_6__.default;
C4.API = _API_js__WEBPACK_IMPORTED_MODULE_7__.default;
C4.SPA = _SPA_js__WEBPACK_IMPORTED_MODULE_8__.default;

window.C4 = C4;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (C4);
})();

/******/ })()
;