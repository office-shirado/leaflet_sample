//レイヤグループ
var officeLayer = new L.LayerGroup();

var adminLayer = new L.LayerGroup();

var makerOverlays = {
	"オフィス白土": officeLayer,
	"行政機関": adminLayer
	};


//オフィス白土
var Office = L.marker([37.05090, 140.88350]);
	Office.addTo(officeLayer);
	Office.bindPopup('<b><a href="http://www.shirado.jp" target="_blank">オフィス白土</a></b>');


//いわき市
var iwaki_city = L.marker([37.05046, 140.88767]);
	iwaki_city.addTo(adminLayer);
	iwaki_city.bindPopup('<center><b><a href="http://www.sonicweb-asp.jp/g-iwaki/" target="_blank">いわき市<br>（ⅰマップ）</a></b></center>');


//法務局
var fukushima_moj = L.marker([37.05150, 140.88900]);
	fukushima_moj.addTo(adminLayer);
	fukushima_moj.bindPopup('<center><b><a href="http://houmukyoku.moj.go.jp/fukushima/" target="_blank">福島地方法務局<br>いわき支局</a></b></center>');
