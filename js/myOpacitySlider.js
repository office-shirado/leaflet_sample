//���߃X���C�_�[

$(function() {
  // �X���C�_�[��K�p
  $('#slider').slider({
    orientation: 'vertical',
    min: 0,
    max: 100,
    step: 2,
    value: 100,
    animate: true,
    range: "min",

    // �X���C�_�[�̕ω����ɓ��ߓx��ύX
    slide: function(e, ui) {
	for (var i = overlayMapsArray.length - 1 ; i >= 0 ; i--){
		overlay_Maps_On_Off[i] = map.hasLayer(overlayMapsArray[i][0]);
		if  (overlay_Maps_On_Off[i] == true){
			overlay_Maps_Opacity[i] = ui.value/100;
			overlayMapsArray[i][0].setOpacity(overlay_Maps_Opacity[i]);
			break;
		}
	}
    }
  });
});
