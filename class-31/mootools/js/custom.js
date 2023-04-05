// function mouseClick() {
//   alert("You clicked me!");
// }

window.addEvent("domready", function () {
  $$("#nav a").addEvent("click", function () {
    alert("You clicked me then execute the event after DOMready!");
  });
});
