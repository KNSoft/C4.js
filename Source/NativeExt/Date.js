// Converts date object to string in 'YYYY-MM-DDTHH:MM:SS' format
Date.prototype.ToDTLString = function () {
    return this.getFullYear() + '-' +
        ('0' + (this.getMonth() + 1)).slice(-2) + '-' +
        ('0' + this.getDate()).slice(-2) + 'T' +
        ('0' + this.getHours()).slice(-2) + ':' +
        ('0' + this.getMinutes()).slice(-2) + ':' +
        ('0' + this.getSeconds()).slice(-2);
};