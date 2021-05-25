import SPA from '../SPA.js';

HTMLAnchorElement.prototype.SetSPARouter = function () {
    SPA.SetRouter(this);
};

HTMLAnchorElement.prototype.SafeRel = function () {
    this.rel = 'noopener noreferrer';
}