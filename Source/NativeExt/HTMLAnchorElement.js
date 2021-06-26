HTMLAnchorElement.prototype.SafeExt = function () {
    if (this.origin && this.origin != location.origin) {
        this.rel = 'noopener noreferrer';
        this.target = '_blank';
    }
}