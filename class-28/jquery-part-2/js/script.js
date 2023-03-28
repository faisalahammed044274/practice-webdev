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

jQuery(function(){
        jQuery(".heading3").hide();
    
});

jQuery(document).ready(function(){
    jQuery(".clickkoren").click(function(){
        jQuery(".box").fadeToggle(2000);
    });
});

$(document).ready(function(){
    $(".clickkoren").hover(function(){
        $(".box").slideUp(1500);
    })
})

jQuery(document).ready(function(){
    jQuery(".animationstart").click(function(){
        jQuery(".box2").animate({'width' : '80%'}, 2000).animate({'width' : '20%'}, 3000).animate({'border-radius' : '60%'}, 1000);
    });
});

jQuery(".stopme").click(function(){
    jQuery(".box2").stop();
});

// Hide, Show, Toggle, Slide, Fade, and Animate. WOW!

// fadeIn(), fadeOut(), fadeToggle(), fadeTo()

// jQuery has the following slide methods:

//     slideDown()
//     slideUp()
//     slideToggle()


// ==================================
//  index 2 scripts
// ==================================

jQuery(document).ready(function(){
   jQuery("#btn1").click(function(){
    alert("Text:" + jQuery("#test").text());
   });

   jQuery("#btn2").click(function(){
    alert("HTML: " + jQuery("#test").html());
  });

  var boxErHeight = $(".myBox").outerHeight(true);
  var boxErWidth = $(".myBox").outerWidth(true);

  alert(boxErHeight);
  alert(boxErWidth);

  jQuery(".father").parents(".son2").css('color','red');
  jQuery(".son1").children(".grandfather").css('color','green');
});

