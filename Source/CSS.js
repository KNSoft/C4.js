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

export default CSS;