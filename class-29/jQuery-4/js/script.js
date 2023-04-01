jQuery(document).ready(function () {
  //   var data1 = jQuery(".data1").val();
  //   var data2 = jQuery(".data2").val();

  //   var bothData = data1 + data2;

  //   jQuery("form").submit(function () {
  //     jQuery(this).after(bothData);
  //   });

  // jQuery("form").submit(function () {
  //   var firstNumber = jQuery(".firstNumber").val();
  //   var lastNumber = jQuery(".lastNumber").val();

  //   var Addition = parseInt(firstNumber) + parseInt(lastNumber);
  //   alert(Addition);
  //   jQuery(this).after(function(){
  //     document.write("<h3>"+Addition+"</h3>");
  //   });
  // });

  jQuery("input[type=text]").focus(function () {
    jQuery(this).val("this is focused");
  });

  jQuery("input[type=text]").blur(function () {
    jQuery(this).val("this is blur");
  });
});
