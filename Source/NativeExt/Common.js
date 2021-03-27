Array.prototype.Each = HTMLCollection.prototype.Each = NodeList.prototype.Each = function (func) {
    for (var i = 0; i < this.length; i++)
        if (func(this[i], i) === false)
            break;
    return i;
};