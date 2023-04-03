jQuery(document).ready(function () {
  jQuery(".content").accordion();

  var avilableTags1 = [
    "async",
    "bootstrap",
    "C",
    "C++",
    "Dom Manipulation",
    "ECMA Script",
    "Flutter",
    "Figma",
    "google",
    "Hypertext Preprocessor(php)",
    "PHP",
    "jQuery",
    "JavaScript",
    "JSON",
    "Java",
  ];
  jQuery("input").autocomplete({
    source: avilableTags1,
  });

  $(function () {
    var availableTags2 = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme",
    ];
    function split(val) {
      return val.split(/,\s*/);
    }
    function extractLast(term) {
      return split(term).pop();
    }

    $("#tags")
      // don't navigate away from the field on tab when selecting an item
      .on("keydown", function (event) {
        if (
          event.keyCode === $.ui.keyCode.TAB &&
          $(this).autocomplete("instance").menu.active
        ) {
          event.preventDefault();
        }
      })
      .autocomplete({
        minLength: 0,
        source: function (request, response) {
          // delegate back to autocomplete, but extract the last term
          response(
            $.ui.autocomplete.filter(availableTags2, extractLast(request.term))
          );
        },
        focus: function () {
          // prevent value inserted on focus
          return false;
        },
        select: function (event, ui) {
          var terms = split(this.value);
          // remove the current input
          terms.pop();
          // add the selected item
          terms.push(ui.item.value);
          // add placeholder to get the comma-and-space at the end
          terms.push("");
          this.value = terms.join(", ");
          return false;
        },
      });
  });

  $(function () {
    $("input[type='radio']").checkboxradio({
      icon: false,
    });
  });

  // $( function() {
  //   $( "#pickyourdate" ).datepicker();
  // } );

  jQuery(function () {
    jQuery("#pickyourdate").datepicker({
      changeMonth: true,
      changeYear: true,
    });
    jQuery("#format").on("change", function () {
      jQuery("#pickyourdate").datepicker("option", "dateFormat", $(this).val());
    });

    jQuery('.popupopen').click(function(){
      jQuery('.popupbox').dialog();
    });

  });


});
