//info01エリア
var info01 = L.control({
	position : 'bottomleft'
});

info01.onAdd = function (map) {
	this._div = L.DomUtil.create('div', 'info');
	this.update();
	return this._div;
};

info01.update = function (zoomLev,centerLatLng) {
	zoomLev = map.getZoom();
	centerLatLng = map.getCenter();
	this._div.innerHTML =	"<center>＜中心座標＞</center>" + 
				"Ｎ： " + Math.round(centerLatLng.lat * 100000)/100000 + "<br>" +
				"Ｅ：" + Math.round(centerLatLng.lng * 100000)/100000 + "<br>" +
				 "Zoom Level：" + zoomLev;
};



//info02エリア
var info02 = L.control({
	position : 'topright'
});

info02.onAdd = function (map) {
	this._div = L.DomUtil.create('div', 'info');
	this.update();
	return this._div;
};

info02.update = function (opacity_layer_name) {
	opacity_layer_name ="-";
	for (var i = overlayMapsArray.length - 1 ; i >= 0 ; i--){
		overlay_Maps_On_Off[i] = map.hasLayer(overlayMapsArray[i][0]);
		if  (overlay_Maps_On_Off[i] == true){
			opacity_layer_name = overlayMapsArray[i][2];
			break;
		}
	}
	this._div.innerHTML =	"透過レイヤ：" + opacity_layer_name;
};
