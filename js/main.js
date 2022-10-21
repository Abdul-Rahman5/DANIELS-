var typed = new Typed(".mov", {
  strings: [, "Larry Daniels", "Designer", "Developer"],
  typeSpeed: 40,
  backSpeed: 40,
  loop: true,
});

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  atuoplay: true,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    767: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});
