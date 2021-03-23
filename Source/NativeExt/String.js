// eval()
String.prototype.Eval = function () {
    return Function('return (' + this + ');')();
};

// Determines the string is a valid float format
String.prototype.IsFloat = function () {
    return (/^([-|+]?\d+)(\.\d+)?$/).test(this);
};

// Determines the string is a valid unsigned float format
String.prototype.IsUFloat = function () {
    return (/^(\+?\d+)(\.\d+)?$/).test(this);
};

// Determines the string is a valid integer format
String.prototype.IsInt = function () {
    return (/^([-|+]?\d+)$/).test(this);
};

// Determines the string is a valid unsigned integer format
String.prototype.IsUInt = function () {
    return (/^(\+?\d+)$/).test(this);
};

// Encodes string by encodeURIComponent() twice
String.prototype.EncodeTwice = function () {
    return encodeURIComponent(encodeURIComponent(this));
};

// Encodes HTML entity chars in the string
String.prototype.EncodeHTML = function () {
    var str = '';
    for (var i = 0; i < this.length; i++) {
        var ch = this.charAt(i);
        if (ch === '<')
            str += '&lt;';
        else if (ch === '>')
            str += '&gt;';
        else if (ch === ' ')
            str += '&nbsp;';
        else if (ch === '&')
            str += '&amp;';
        else if (ch === '"')
            str += '&quot;';
        else
            str += ch;
        return str;
    };
};