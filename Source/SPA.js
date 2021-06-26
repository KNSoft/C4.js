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

export default SPA;