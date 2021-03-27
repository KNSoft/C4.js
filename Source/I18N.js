import Load from './Load.js';

var I18N = {
    Init: function (opt) {
        var str;
        if (opt.Lang && opt.SupportLang.indexOf(opt.Lang) !== -1)
            this.Lang = opt.Lang;
        else {
            for (var i = 0; i < opt.SupportLang.length; i++)
                if (navigator.language.indexOf(opt.SupportLang[i]) !== -1) {
                    this.Lang = opt.SupportLang[i];
                    break;
                }
            if (this.Lang === undefined) {
                str = navigator.language.substring(0, navigator.language.indexOf('-'));
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
        var _I18N = this;
        return Load.JSON({
            URL: opt.Dir + _I18N.Lang + '.json',
            OnSuccess: opt.OnSuccess,
            OnError: function (xhr) {
                if (xhr.status === 404 && _I18N.DefLang && _I18N.DefLang !== _I18N.Lang)
                    Load.JSON({
                        URL: opt.Dir + _I18N.DefLang + '.json',
                        OnSuccess: obj.OnSuccess
                    });
            }
        });
    }
};

export default I18N;