jQuery(document).ready(function(){
    jQuery("p").click(function(){
        jQuery(this).hide( function(){
            jQuery('.reset').click(function(){
                jQuery('p').show();
            })
        });
    });

    jQuery(".box").html("<h1>Hello</h1>");
});