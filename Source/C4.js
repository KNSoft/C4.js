import './Polyfill/Main.js';
import './NativeExt/Main.js';
import CSS from './CSS.js';
import Cookie from './Cookie.js';
import VDOM from './VDOM.js';
import AJAX from './AJAX.js';
import Load from './Load.js';
import API from './API.js';
import SPA from './SPA.js';

var C4 = function (id) {
    return document.getElementById(id);
};

C4.CSS = CSS;
C4.Cookie = Cookie;
C4.VDOM = VDOM;
C4.AJAX = AJAX;
C4.Load = Load;
C4.API = API;
C4.SPA = SPA;

window.C4 = C4;

export default C4;