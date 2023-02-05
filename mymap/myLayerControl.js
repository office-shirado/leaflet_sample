//レイヤコントロール

//レイヤコントロール01
var LayerControl_01 = L.control.layers(baseMaps, overlayMaps, {
	position : 'topright'
});

//レイヤコントロール02
var LayerControl_02 = L.control.layers(null, makerOverlays, {
	position : 'topright'
});

