$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    'animateOut': "slideOutDown",
    'animateIn': "flipInX",
    'items': 5,
    'margin': 30,
    'stagePadding': 30,
    'smartSpeed': 450,
    'autoplay': true,
    'autoplayTimeout': 2000,
    'loop': true,
    'margin': 10,
    'responsiveClass': true,
    'merge': true,
  });

  $(".play").on("click", function () {
    owl.trigger("play.owl.autoplay", [1000]);
  });
  $(".stop").on("click", function () {
    owl.trigger("stop.owl.autoplay");
  });
});
