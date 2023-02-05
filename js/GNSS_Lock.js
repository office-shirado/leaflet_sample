//  *****  ファンクション  *****

var GNSS_Lock_ID

//現在地ロック
function GNSS_Lock_ON(){
	var lock_position_options = {
		enableHighAccuracy: true,   // 高精度を要求する
		timeout: 5000,
		maximumAge: 0
	};

	//***** 位置情報取得コマンド *****/
	GNSS_Lock_ID = navigator.geolocation.watchPosition(lock_successCallback, lock_errorCallback, lock_position_options);


	//***** 位置情報が取得できた場合 *****/
	function lock_successCallback(position) {
		map.setView([position.coords.latitude ,  position.coords.longitude]);
	}

	//***** 位置情報が取得できない場合 *****/
	function lock_errorCallback(error) {
//		alert("位置情報を取得できませんでした。");
	}

	document.getElementById("GNSS_switch_OFF").style.display = "none";
	document.getElementById("GNSS_switch_ON").style.display = "";

}


//現在地ロック解除
function GNSS_Lock_OFF(){
	navigator.geolocation.clearWatch(GNSS_Lock_ID);
	document.getElementById("GNSS_switch_ON").style.display = "none";
	document.getElementById("GNSS_switch_OFF").style.display = "";

}
