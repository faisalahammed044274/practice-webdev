jQuery(document).ready(function () {
  jQuery(".content").accordion();

  var avilableTags = [
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
    source: avilableTags,
  });
});
