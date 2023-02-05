//メニューファンクション

//GoogleMap
function JumpGooleMap (e) {
	var getLatLng = e.latlng.toString().slice(7,-1);
	window.open("https://www.google.co.jp/maps?q=" + getLatLng + "&hl=ja");
}


//座標表示（緯度経度）
function showCoordinates (e) {
//	L.marker(e.latlng).addTo(map);
	alert(e.latlng);
}


//マップセンター
function centerMap (e) {
//	L.marker(e.latlng).addTo(map);
	map.panTo(e.latlng);
}


//ズームイン
function zoomIn (e) {
	map.zoomIn();
}


//ズームアウト
function zoomOut (e) {
	map.zoomOut();
}


//座標入力
function InputXY (e) {

	// Ｘ座標入力
	coordinate_X = prompt("Ｘ座標を入力してください。", "");

	// 入力内容が "" の場合は "0" にする。
	if(coordinate_X == ""){
		coordinate_X = "0";
	}
	// 入力内容が数値でない場合は警告ダイアログを表示
	else if(coordinate_X.match(/[^0-9]+/)){    		//半角数字以外の文字である場合
		alert("半角数字以外の文字が入力されています。もう一度確認して下さい。");
		coordinate_X = "0";
	}
alert(coordinate_X);
}











//コンテキストメニュー
var ContextItem = [
	{
	text: 'GooleMap表示',
	callback: JumpGooleMap
	},
	'-',
	{
	text: '座標値表示',
	callback: showCoordinates
	}, {
	text: '中心をここにする',
	callback: centerMap
	}, {
	text: '座標入力（Ｘ座標）',
	callback: InputXY
	}
]


