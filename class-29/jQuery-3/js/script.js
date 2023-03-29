jQuery(document).ready(function(){
    jQuery("p").click(function(){
        jQuery(this).hide( function(){
            jQuery('.reset').click(function(){
                jQuery('p').show();
            })
        });
    });
    
    jQuery(window).resize(function(){
        var screenSize = jQuery(window).width();
        jQuery(".box").text(screenSize);
    });

jQuery(window).scroll(
function(){
    var uporerDurotto = jQuery(window).scrollTop();
    jQuery(".box").text(uporerDurotto);

});

});