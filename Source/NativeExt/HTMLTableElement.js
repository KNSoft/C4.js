// count > 0: Deletes last `count` rows
// count < 0: Deletes last items until `count` rows remains
HTMLTableElement.prototype.DeleteLastRows = function(count) {
    var nRows = this.rows.length;
    var nStart, nCount;
    if (count < 0) {
        nStart = -count;
        nCount = nRows - nStart;
    } else {
        nStart = nRows - count;
        nCount = count;
    }
    for (var i = 0; i < nCount; i++)
        this.deleteRow(nStart);
}