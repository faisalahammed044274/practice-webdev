jQuery(document).ready(function() {
  jQuery('.slider').slider({
    min: 0,
    max: 255,
    slide: function(event, ui) {
      var redValue = jQuery('.red').slider('value');
      var greenValue = jQuery('.green').slider('value');
      var blueValue = jQuery('.blue').slider('value');
      var rgbValue = 'rgb(' + redValue + ',' + greenValue + ',' + blueValue + ')';
      jQuery('.box').css('background-color', rgbValue);
    }
  });
});
