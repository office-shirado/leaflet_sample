<!-- マップイベント -->
var zoomLev = map.getZoom();
var opacity_layer_name = "-";

//ポップアップオープン
map.on("popupopen", function(){
		//検索パネル非表示
		if (document.getElementById("Panel_Search").style.visibility == "visible"){
			document.getElementById("Panel_Search").style.visibility = "hidden";
		}
		//設定パネル非表示
		if (document.getElementById("Panel_Control").style.visibility == "visible"){
			document.getElementById("Panel_Control").style.visibility = "hidden";
		}
		//ヘルプパネル非表示
		if (document.getElementById("Panel_Help").style.visibility == "visible"){
			document.getElementById("Panel_Help").style.visibility = "hidden";
		}
		//センターカーソル非表示
		document.getElementById("cross").style.visibility = "hidden";
})


//ポップアップクローズ
map.on("popupclose", function(){
		//センターカーソル表示
		document.getElementById("cross").style.visibility = "visible";
})


//マウスダウン
map.on("mousedown", function(){
		//検索パネル非表示
		if (document.getElementById("Panel_Search").style.visibility == "visible"){
			document.getElementById("Panel_Search").style.visibility = "hidden";
		}
		//設定パネル非表示
		if (document.getElementById("Panel_Control").style.visibility == "visible"){
			document.getElementById("Panel_Control").style.visibility = "hidden";
		}
		//ヘルプパネル非表示
		if (document.getElementById("Panel_Help").style.visibility == "visible"){
			document.getElementById("Panel_Help").style.visibility = "hidden";
		}
})


//クリック
map.on("click", function(){
		//検索パネル非表示
		if (document.getElementById("Panel_Search").style.visibility == "visible"){
			document.getElementById("Panel_Search").style.visibility = "hidden";
		}
		//設定パネル非表示
		if (document.getElementById("Panel_Control").style.visibility == "visible"){
			document.getElementById("Panel_Control").style.visibility = "hidden";
		}
		//ヘルプパネル非表示
		if (document.getElementById("Panel_Help").style.visibility == "visible"){
			document.getElementById("Panel_Help").style.visibility = "hidden";
		}
})


//ダブルクリック
map.on("dblclick", function(e){
	var MapEdgeWest = map.getBounds().getWest();
	var MapEdgeEast = map.getBounds().getEast();
	var MapEdgeNorth = map.getBounds().getNorth();
	var MapEdgeSouth = map.getBounds().getSouth();

	var MouseCoordinateWE = e.latlng.lng;
	var MouseCoordinateNS = e.latlng.lat;

	var ClickArea = Math.ceil( ( MouseCoordinateWE - MapEdgeWest ) / ( (MapEdgeEast - MapEdgeWest ) / 3) ) 
			+ Math.ceil( ( MouseCoordinateNS - MapEdgeNorth ) / ( (MapEdgeSouth - MapEdgeNorth ) / 3) )* 10 ;

	switch(ClickArea){
		case 11://【左上】
			map.setView(homeLatLng,homeZoomLev);
			break;
		case 12://【上】
			//透過度加算
			addOpacity();
			break;
		case 13://【右上】
			break;
		case 21://【左】
			//オーバーレイ追加（新しい順：降順）
			addOverlayNew();
			break;
		case 22://【中】
			//ズームイン
			map.zoomIn();
			break;
		case 23://【右】
			//オーバーレイ追加（古い順：昇順）
			addOverlayOld();
			break;
		case 31://【左下】
			//ズームアウト
			map.zoomOut();
			break;
		case 32://【下】
			//透過度減算
			subOpacity();
			break;
		case 33://【右下】
			break;
	}
})


//ズームエンド
map.on("zoomend", function(){
	info01.update(zoomLev);
	info01.update(centerLatLng);
})


//ムーブエンド
map.on("moveend", function(){
	info01.update(zoomLev);
	info01.update(centerLatLng);
})


//オーバーレイ（追加：add）
map.on("overlayadd", function(){
	Change_Opacity_Layer();
})

//オーバーレイ（除去：remove）
map.on("overlayremove", function(){
	Change_Opacity_Layer();
})




//---  ファンクション  ---//

//透過度加算
function addOpacity(){
	for (var i = overlayMapsArray.length - 1 ; i >= 0 ; i--){
		overlay_Maps_On_Off[i] = map.hasLayer(overlayMapsArray[i][0]);
		if  (overlay_Maps_On_Off[i] == true){
			overlay_Maps_Opacity[i] += 0.35;
			if(overlay_Maps_Opacity[i] > 1){
				overlay_Maps_Opacity[i]= 1;
			}
			overlayMapsArray[i][0].setOpacity(overlay_Maps_Opacity[i]);
			$('#slider').slider({value : overlay_Maps_Opacity[i] * 100});
			break;
		}
	}
}


//透過度減産
function subOpacity(){
	for (var i = overlayMapsArray.length - 1 ; i >= 0 ; i--){
		overlay_Maps_On_Off[i] = map.hasLayer(overlayMapsArray[i][0]);
		if  (overlay_Maps_On_Off[i] == true){
			overlay_Maps_Opacity[i] -= 0.35;
			if(overlay_Maps_Opacity[i] < 0){
				overlay_Maps_Opacity[i]= 0;
			}
			overlayMapsArray[i][0].setOpacity(overlay_Maps_Opacity[i]);
			$('#slider').slider({value : overlay_Maps_Opacity[i] * 100});
			break;
		}
	}
}


//オーバーレイ追加（古い順：昇順）
function addOverlayOld(){
	var k = 0;

	for (var i = 0; i < overlayMapsArray.length; i++){
		overlay_Maps_On_Off[i] = map.hasLayer(overlayMapsArray[i][0]);
		if  (overlay_Maps_On_Off[i] == true){
			k = i + 1;
		}
	}

	for (i = 0; i < overlayMapsArray.length; i++){
		map.removeLayer(overlayMapsArray[i][0]);
	}

	if (k != overlayMapsArray.length){
		overlayMapsArray[k][0].addTo(map);
	}
}


//オーバーレイ追加（新しい順：降順）
function addOverlayNew(){
	var k = overlayMapsArray.length - 1;

	for (var i = overlayMapsArray.length - 1 ; i >= 0 ; i--){
		overlay_Maps_On_Off[i] = map.hasLayer(overlayMapsArray[i][0]);
		if  (overlay_Maps_On_Off[i] == true){
			k = i - 1;
		}
	}

	for (i = 0; i < overlayMapsArray.length; i++){
		map.removeLayer(overlayMapsArray[i][0]);
	}

	if (k != -1){
		overlayMapsArray[k][0].addTo(map);
	}
}


//透過レイヤ更新（透過度・スライダー）
function Change_Opacity_Layer(){
	for (var i = overlayMapsArray.length - 1 ; i >= 0 ; i--){
		overlay_Maps_On_Off[i] = map.hasLayer(overlayMapsArray[i][0]);
		if  (overlay_Maps_On_Off[i] == true){
			overlayMapsArray[i][0].setOpacity(overlay_Maps_Opacity[i]);
			$('#slider').slider({value : overlay_Maps_Opacity[i] * 100});
			break;
		}
	}
	info02.update(opacity_layer_name);
}
