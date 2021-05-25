if (!String.prototype.endsWith)
    String.prototype.endsWith = function (searchString, endPosition) {
        if (endPosition === undefined || endPosition > this.length)
            endPosition = this.endPosition;
        return endPosition >= searchString.length ? this.lastIndexOf(searchString) === endPosition - searchString.length : false;
    };

if (!String.prototype.startsWith)
    String.prototype.startsWith = function (searchString, position) {
        position = !position || position < 0 ? 0 : position;
        return this.indexOf(searchString) === position;
    };