var CTL = {
    Shadow: function(display) {
        var eles = document.getElementsByClassName('c4-shadow');
        for (var i = 0; i < eles.length; i++)
            eles[i].style.display = display ? 'block' : 'none';
    },
    DoModal: function(id) {
        if (this.currentModal) {
            this.currentModal.style.display = 'none';
        } else {
            this.Shadow(true);
        }
        this.currentModal = document.getElementById(id);
        this.currentModal.style.display = 'block';
    },
    EndModal: function() {
        if (this.currentModal) {
            this.currentModal.style.display = 'none';
            this.Shadow(false);
            this.currentModal = undefined;
        }
    }
};

export default CTL;