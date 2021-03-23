import CSSContent from './css/Main.css'

var CSS = {
    LoadDefault: function () {
        var node = document.createElement('style');
        node.innerHTML = CSSContent;
        return document.getElementsByTagName('head')[0].appendChild(node);
    }
};

export default CSS;