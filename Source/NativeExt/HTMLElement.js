import Load from '../Load.js';
import VDOM from '../VDOM.js'
import SPA from '../SPA.js';

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
    Load.HTML(opt, this);
};

HTMLElement.prototype.AppendChild = function (opt) {
    return this.appendChild(VDOM(opt));
}