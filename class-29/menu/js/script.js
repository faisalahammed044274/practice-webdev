jQuery(document).ready(function(){

    jQuery(".main-menu .bar i").click(function(){
         jQuery(".main-menu ul").slideToggle();
    });

    jQuery(window).resize(function(){
        var screenWidth = jQuery(window).width();
        if(screenWidth > 768){
        // jQuery(".main-menu ul").show();
        jQuery(".main-menu ul").removeAttr("style");
    }
    // else{
    //     jQuery(".main-menu ul").hide();

    //     }
    });


    jQuery(".main-menu ul li").hover(
        function(){
            jQuery(this).children("ul").show(200);
        },
        function(){
            jQuery(this).children("ul").hide(200);
        });

    jQuery(".main-menu ul ul").parent("li").children("a").append('&nbsp;&nbsp;<i class="fas fa-angle-down"></i>');


});