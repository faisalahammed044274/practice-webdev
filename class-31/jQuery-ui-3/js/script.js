jQuery(document).ready(function () {
  jQuery(".slider").slider({
    min: 0,
    max: 255,
    slide: function (event, ui) {
      var redValue = jQuery(".red").slider("value");
      var greenValue = jQuery(".green").slider("value");
      var blueValue = jQuery(".blue").slider("value");
      var rgbValue =
        "rgb(" + redValue + "," + greenValue + "," + blueValue + ")";
      jQuery(".box").css("background-color", rgbValue);
    },
  });

  jQuery(".range").slider({
    range: "true",
    min: 1000,
    max: 20000,
    values: [1000, 10000],
    slide: function (event, faisal) {
      jQuery(".rangeText").text(
        "Price range : " +
          faisal.values[0] +
          " tk to " +
          faisal.values[1] +
          "tk"
      );
    },
  });
});
