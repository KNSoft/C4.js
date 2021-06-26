import Load from './Load.js';

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
        return Load.JSON({
            URL: opt.Dir + I18N.Lang + '.json',
            OnSuccess: opt.OnSuccess,
            OnError: function (errName, errNum, errMsg) {
                if (errName === 'HTTP' && errNum == 404 && I18N.DefLang && I18N.DefLang !== I18N.Lang)
                    Load.JSON({
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

export default I18N;