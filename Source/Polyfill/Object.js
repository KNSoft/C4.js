if (typeof Object.assign !== 'function') {
    Object.defineProperty(Object, 'assign', {
        value: function (target, sources) {
            if (target === null || target === undefined)
                throw new TypeError('Cannot convert undefined or null to object');
            var obj = Object(target);
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                if (source !== null && source !== undefined)
                    for (var prop in source)
                        if (Object.prototype.hasOwnProperty.call(source, prop))
                            obj[prop] = source[prop];
            }
            return obj;
        },
        writable: true,
        configurable: true
    });
}