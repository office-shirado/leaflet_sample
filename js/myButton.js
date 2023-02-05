L.Control.myButton = L.Control.extend({
    options: {
        position: 'topleft',
        title: ''
    },

    onAdd: function () {
	var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control');

        this.link = L.DomUtil.create('a', 'leaflet-bar-part', container);
        this.addImage();
        this.link.href = '#';

        L.DomEvent.on(this.link, 'click', this.dotime, this);	//click���̓���
        this.link.title = this.options.title;

        return container;
    },

	intendedFunction: function(){
		alert('No Function');
	},

	//�N���b�N���̊��ݒ�ythis.dotime�z
	dotime: function (e) {
		L.DomEvent.stopPropagation(e);
		L.DomEvent.preventDefault(e);
		L.DomEvent.stop(e);
        	this.intendedFunction();
	    },


	//11�s�ɔ��f�ythis.addImage()�z
	addImage: function () {
		var extraClasses = this.options.intentedIcon.lastIndexOf('fa', 0) === 0 ? ' fa fa-lg' : ' glyphicon';
		L.DomUtil.create('i', this.options.intentedIcon + extraClasses, this.link);
	}


});


//�I�v�V�����ݒ�
L.myButton = function( btnIcon , btnFunction , btnTitle) {
	var newControl = new L.Control.myButton;

	//�A�C�R��
	if (btnIcon) newControl.options.intentedIcon = btnIcon;

	//�t�@���N�V����
	if (btnFunction) newControl.intendedFunction = btnFunction;

	//�t���[�^�C�g��
	if (btnTitle) newControl.options.title = btnTitle;

	return newControl;
};
