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


});