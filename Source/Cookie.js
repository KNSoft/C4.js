var Cookie = {
    /*
        opt = {
            Name: 'Cookie1',    // Name of cookie
            Value: 'Value1',    // Value of cookie
            Path: 'Path',       // Optional, path of cookie
            ExpireDays: 30,     // Optional, number of valid days, or Infinity for never expires
        }
    */
    Set: function(opt) {
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
    Get: function(name) {
        for (var ck, i = 0, cks = document.cookie.split('; '); i < cks.length; i++) {
            ck = cks[i].split('=');
            if (ck[0] === name)
                return decodeURIComponent(ck[1]);
        }
    },
    Delete: function(name, path) {
        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT' + (path ? ';path=' + path : '');
    }
};

export default Cookie;