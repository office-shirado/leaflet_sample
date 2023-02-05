//myButton（ボタンカスタム）

//ホーム
var button_Home = L.myButton(
	'fa-home',				//アイコン
       	//ファンクション
	function (){
		map.setView(homeLatLng,homeZoomLev)
	},
	'ホーム'				//ホバーテキスト
);



//位置取得（現在地）
var button_Locate = L.myButton(
	'fa-compass',					//アイコン
       	//ファンクション
	function (){
		map.locate({
			watch: false,
			timeout: 10000,
			maximumAge: 0,
			enableHighAccuracy: true,
			setView: true
		});
//		getLocate();
	},
	'現在地'					//ホバーテキスト
);



//マーカー表示
var button_Maker_ON_OFF = L.myButton(
	'fa fa-map-marker', 			//アイコン
       	//ファンクション
	function (){
		var offceLayer_On_Off = map.hasLayer(officeLayer);
		var adminLayer_On_Off = map.hasLayer(adminLayer);

		if (offceLayer_On_Off == true || adminLayer_On_Off == true){
			map.removeLayer(officeLayer);
			map.removeLayer(adminLayer);
		}else{
			officeLayer.addTo(map);
			adminLayer.addTo(map);
		}
	},
	'マーカー表示'			//ホバーテキスト
);



//検索
var button_Panel_Search_ON_OFF = L.myButton(
	'fa-search', 			//アイコン
       	//ファンクション
	function (){
		if (document.getElementById("Panel_Search").style.visibility == "hidden"){
			document.getElementById("Panel_Search").style.visibility = "visible";
			document.getElementById("Panel_Control").style.visibility = "hidden";
			document.getElementById("Panel_Help").style.visibility = "hidden";
		}
		else
		{
			document.getElementById("Panel_Search").style.visibility = "hidden";
		}
	},
	'検　索'			//ホバーテキスト
);



//設定
var button_Panel_Control_ON_OFF = L.myButton(
	'fa fa-cogs', 			//アイコン
       	//ファンクション
	function (){
		if (document.getElementById("Panel_Control").style.visibility == "hidden"){
			document.getElementById("Panel_Search").style.visibility = "hidden";
			document.getElementById("Panel_Control").style.visibility = "visible";
			document.getElementById("Panel_Help").style.visibility = "hidden";
		}
		else
		{
			document.getElementById("Panel_Control").style.visibility = "hidden";
		}
	},
	'設　定'			//ホバーテキスト
);



//ヘルプ
var button_Panel_Help_ON_OFF = L.myButton(
	'fa fa-question', 			//アイコン
       	//ファンクション
	function (){
		if (document.getElementById("Panel_Help").style.visibility == "hidden"){
			document.getElementById("Panel_Search").style.visibility = "hidden";
			document.getElementById("Panel_Control").style.visibility = "hidden";
			document.getElementById("Panel_Help").style.visibility = "visible";
		}
		else
		{
			document.getElementById("Panel_Help").style.visibility = "hidden";
		}
	},
	'ヘルプ'			//ホバーテキスト
);



//  *****  ファンクション  *****
//現在地取得
function getLocate(){
	var position_options = {
		enableHighAccuracy: true,   // 高精度を要求する
		timeout: 5000,
		maximumAge: 0
	};

	//***** 位置情報取得コマンド *****/
	navigator.geolocation.getCurrentPosition(successCallback, errorCallback, position_options);


	//***** 位置情報が取得できた場合 *****/
	function successCallback(position) {
		map.setView([position.coords.latitude ,  position.coords.longitude]);
	}

	//***** 位置情報が取得できない場合 *****/
	function errorCallback(error) {
//		alert("位置情報を取得できませんでした。");
	}
}

