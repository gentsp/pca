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

  $('.gallery-wrapper').magnificPopup({type:'image', delegate: 'a.image-link', gallery:{enabled:true}});
});
