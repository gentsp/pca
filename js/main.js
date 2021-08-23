$(document).ready(function () {
  $(".menu-desktop .hamburger").click(function (e) {
    $(this).toggleClass("active");
    $("#main-nav").toggleClass("active");
    $("body").toggleClass("active-menu");
    $(".container").toggleClass("active-menu");
    $(".main-nav .menus").toggleClass("show");
    $("header").toggleClass("show");
  });

  $(".for-mobile .hamburger").click(function (e) {
    $(this).toggleClass("active");
    $("#main-nav").toggleClass("active");
    $("body").toggleClass("active-menu");
  });

  if ($(window).width() <= 425) {
    $(".harmonic").bxSlider({
      touchEnabled: true,
    });
  } else {
    $(".harmonic div").on("click", function () {
      $(".harmonic div").removeClass("active");
      $(this).addClass("active");
    });
  }

  if ($(".gallery-wrapper").length)
    $(".gallery-wrapper").magnificPopup({
      type: "image",
      delegate: "a.image-link",
      gallery: { enabled: true },
    });

  var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: "onLeave",
      duration: "200%", // this works just fine with duration 0 as well
      // However with large numbers (>20) of pinned sections display errors can occur so every section should be unpinned once it's covered by the next section.
      // Normally 100% would work for this, but here 200% is used, as Panel 3 is shown for more than 100% of scrollheight due to the pause.
    },
  });

  // get all slides
  var slides = document.querySelectorAll("section.panel");

  // create scene for every slide
  for (var i = 0; i < slides.length; i++) {
    new ScrollMagic.Scene({
      triggerElement: slides[i],
    })
      .setPin(slides[i], { pushFollowers: false })
      .addTo(controller);
  }
});
