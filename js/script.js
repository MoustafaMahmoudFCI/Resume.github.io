$(document).on("scroll", function () {
  if (window.scrollY > 600) {
    $("#back-to-top").css("opacity", "1");
  } else {
    $("#back-to-top").css("opacity", "0");
  }
});

$("#header-toggler").on("click", () => {
  $("#header").toggleClass("show-mobile-nav");
  $("#header-toggler i").toggleClass("icofont-navigation-menu icofont-close");
});

// scroll to section
$(document).on("click", ".nav-menu a", function (params) {
  let scrollTo = $(this.hash);
  $("html", "body").animate(
    {
      scrollTop: scrollTo,
    },
    1000,
    "EaseInOutExpo"
  );
  // add class active to link
  if ($(this).parents(".nav-menu").length) {
    $(".nav-menu .active").removeClass("active");
    $(this).closest("li").addClass("active");
  }
});

//Navigation active state on scroll
let navSections = $("section");
let mainNav = $(".nav-menu");
$(document).on("scroll", function () {
  let cur_pos = $(this).scrollTop() + 300;
  navSections.each(function () {
    let top = $(this).offset().top;
    let bottom = top + $(this).outerHeight();
    if (cur_pos >= top && cur_pos <= bottom) {
      if (cur_pos <= bottom) {
        mainNav.find("li").removeClass("active");
      }
      mainNav
        .find("a[href='#" + $(this).attr("id") + "']")
        .parent()
        .addClass("active");
    }
    if (cur_pos <= 300) {
      $(".nav-menu ul:first li:first").addClass("active");
    }
  });
});

// typed in hero section
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
  time: 1000,
});

// Skills section
$(".skills").waypoint(
  function () {
    $(".progress .progress-bar").each(function () {
      $(this).animate(
        {
          width: $(this).attr("aria-valuenow") + "%",
        },
        1500
      );
    });
  },
  { offset: "80%" }
);

//Init aos
AOS.init({
  duration: 1000,
  once: true,
});
// init Isotope
var $grid = $(".portfolio-content").isotope({
  // options
});

// add class active to portfolio filters
$(".portfolio-filter li").on("click", function () {
  $(".portfolio-filter li").removeClass("active");
  $(this).addClass("active");
});

// filter items on button click
$(".portfolio-filter").on("click", "li", function () {
  var filterValue = $(this).attr("data-filter");
  $grid.isotope({ filter: filterValue });
});

// Init venobox
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
