jQuery(document).ready(function () {
  jQuery(".main-menu .bar i").click(function () {
    jQuery(".main-menu ul").slideToggle();
  });

  jQuery(window).resize(function () {
    var screenWidth = jQuery(window).width();
    if (screenWidth > 768) {
      // jQuery(".main-menu ul").show();
      jQuery(".main-menu ul").removeAttr("style");
    }
    // else{
    //     jQuery(".main-menu ul").hide();

    //     }
  });

  jQuery(".main-menu ul li").hover(function () {
    jQuery(this).children("ul").slideToggle(300);
  });
  // function(){
  //     jQuery(this).children("ul").hide();
  // });

  jQuery(".main-menu ul ul")
    .parent("li")
    .children("a")
    .append('&nbsp;&nbsp;<i class="fas fa-angle-down"></i>');

  jQuery(".scrollUpArrow").click(function () {
    jQuery("html").animate({ scrollTop: "1450px" }, 2000);
  });

  jQuery(window).scroll(function () {
    var utd = jQuery(window).scrollTop();

    if (utd > 200) {
      jQuery(".main-menu").addClass("fixed");
    } else {
      jQuery(".main-menu").removeClass("fixed");
    }

    if (utd >= 300) {
      jQuery(".scrollUpArrow").fadeIn();
    } else {
      jQuery(".scrollUpArrow").fadeOut();
    }
  });

  // var headerHeight = jQuery(".header-area").OuterHeight();
});
