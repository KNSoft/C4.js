var SPA = {
    ATagRespond: function (e) {
        C4(e.currentTarget.getAttribute('data-target')).Load({
            URL: e.currentTarget.getAttribute('href')
        });
        return false;
    },
    SetATag: function (aTag) {
        aTag.onclick = this.ATagRespond;
    }
};

export default SPA;