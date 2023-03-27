// jQuery("p").hide();

// var dhori = jQuery('h5').text();

// jQuery("h5").html("<h1>"+"dhori (kiiii???)"+"</h1>");

// jQuery("h5").css('color','red');
// jQuery("h5").css('background','grey');
// jQuery("h5").css('padding','10px');


jQuery("h5").css('color','grey').css('background','yellow').css('padding','10px').css('text-shadow',('2px 2px #ff0000'));

jQuery(".para").addClass("myColor");

// jQuery(".para").click(
//     function(){
//         jQuery(".heading3").toggle();
//     }
// );
jQuery(document).ready(function(){

    jQuery(".para").hover(
        function(){
            jQuery(".heading3").toggle();
        }
    );
})

