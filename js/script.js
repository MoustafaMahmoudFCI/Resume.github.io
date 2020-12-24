$(document).on("scroll", function () {
  if (window.scrollY > 600) {
    $("#back-to-top").css("opacity", "1");
  } else {
    $("#back-to-top").css("opacity", "0");
  }
});

$("#header-toggler").on("click", () => {
  $("#header").toggleClass("show-mobile-nav");
});

let typedItems = document.querySelector(".typed").dataset.typedItems;
let typed = new Typed(".typed", {
  strings: typedItems.split(","), // convert string to array
  typeSpeed: 200,
  backSpeed: 100,
  smartBackspace: true,
  loop: true,
  loopCount: Infinity,
});

$(".counter").counterUp({
  delay: 10,
  time: 2000,
});

// Skills section
$(".skills-content").waypoint(
  function () {
    $(".progress .progress-bar").each(function () {
      $(this).css("width", $(this).attr("aria-valuenow") + "%");
    });
  },
  {
    offset: "80%",
  }
);

//Init aos
AOS.init({
  duration: 1000,
  once: true,
});

$(".portfolio-filter li").on("click", function () {
  $(".portfolio-filter li").removeClass("active");
  $(this).addClass("active");
});

// init Isotope
var $grid = $(".portfolio-content").isotope({
  // options
});
// filter items on button click
$(".portfolio-filter").on("click", "li", function () {
  var filterValue = $(this).attr("data-filter");
  console.log(filterValue);
  $grid.isotope({ filter: filterValue });
});

$(".venobox").venobox({
  spinner: "three-bounce",
  share: ["facebook", "twitter", "download"], // default: []
});
//trigger owlcarousel
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  dots: true,
  autoplay: true,
  items: 1,
});
