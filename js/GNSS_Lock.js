//  *****  �t�@���N�V����  *****

var GNSS_Lock_ID

//���ݒn���b�N
function GNSS_Lock_ON(){
	var lock_position_options = {
		enableHighAccuracy: true,   // �����x��v������
		timeout: 5000,
		maximumAge: 0
	};

	//***** �ʒu���擾�R�}���h *****/
	GNSS_Lock_ID = navigator.geolocation.watchPosition(lock_successCallback, lock_errorCallback, lock_position_options);


	//***** �ʒu��񂪎擾�ł����ꍇ *****/
	function lock_successCallback(position) {
		map.setView([position.coords.latitude ,  position.coords.longitude]);
	}

	//***** �ʒu��񂪎擾�ł��Ȃ��ꍇ *****/
	function lock_errorCallback(error) {
//		alert("�ʒu�����擾�ł��܂���ł����B");
	}

	document.getElementById("GNSS_switch_OFF").style.display = "none";
	document.getElementById("GNSS_switch_ON").style.display = "";

}


//���ݒn���b�N����
function GNSS_Lock_OFF(){
	navigator.geolocation.clearWatch(GNSS_Lock_ID);
	document.getElementById("GNSS_switch_ON").style.display = "none";
	document.getElementById("GNSS_switch_OFF").style.display = "";

}
