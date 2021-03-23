Object.prototype.Attr = function (opt) {
    for (var prop in opt)
        if (Object.prototype.hasOwnProperty.call(opt, prop))
            this[prop] = (typeof opt[prop] === 'object' && typeof this[prop] !== 'object' && opt[prop].Clone) ? this[prop] = opt[prop].Clone() : opt[prop];
};

Object.prototype.EachProp = function (func) {
    for (var prop in this)
        if (Object.prototype.hasOwnProperty.call(this, prop) && func(prop, this[prop]) === false)
            break;
};

Object.prototype.Clone = function () {
    var obj = {};
    for (var prop in this)
        if (Object.prototype.hasOwnProperty.call(this, prop))
            obj[prop] = (typeof this[prop] === 'object' && this[prop].Clone) ? this[prop].Clone() : this[prop];
    return obj;
};