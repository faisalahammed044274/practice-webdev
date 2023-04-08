jQuery(document).ready(function () {
  jQuery(".test-popup-link").magnificPopup({
    type: "image",
  });
});

jQuery(document).ready(function () {
  jQuery(".parent-container").magnificPopup({
    delegate: "a", // child items selector, by clicking on it popup will open
    type: "image",
    gallery: {
      enabled: true,
    },
  });
});
