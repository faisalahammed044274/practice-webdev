jQuery(document).ready(function () {
  //   jQuery(".box").draggable({ cursor: "pointer", containment: ".big-box" });

  jQuery(".box").draggable({
    cursor: "move",
  });

  jQuery(".big-box").droppable({
    drop: function (event, ui) {
      $(this).addClass("ui-state-highlight").find("h3").html("Dropped!");
    },
  });

  jQuery(document).ready(function () {
    jQuery(".box-2").resizable({animate: true});
  });
});
