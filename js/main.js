document
  .querySelectorAll(".testsite")
  .forEach((b) => b.removeAttribute("href"));

var elem = document.querySelector(".main-carousel");
var flkty = new Flickity(elem, {
  // options
  cellAlign: "left",
  contain: true,
  fullscreen: true,
});
