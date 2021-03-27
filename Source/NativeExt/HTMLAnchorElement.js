import SPA from '../SPA.js';

HTMLAnchorElement.prototype.SetSPA = function () {
    SPA.SetATag(this);
};