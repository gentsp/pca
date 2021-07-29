$(document).ready(function () {
  $(".hamburger").click(function (e) {
    $(this).toggleClass("active");
    $("#main-nav").toggleClass("active");
    $("body").toggleClass("active-menu");
    $(".main-nav .menus").toggleClass('show');
    $("header").toggleClass('show');
  });

  $('.harmonic div').on('click', function() {
    $('.harmonic div').removeClass('active');
    $(this).addClass('active');
  });
});
