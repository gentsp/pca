$(document).ready(function () {
  $(".menu-desktop .hamburger").click(function (e) {
    $(this).toggleClass("active");
    $("#main-nav").toggleClass("active");
    $("body").toggleClass("active-menu");
    $(".main-nav .menus").toggleClass('show');
    $("header").toggleClass('show');
  });

  $(".for-mobile .hamburger").click(function(e) {
		$(this).toggleClass("active");
    $("#main-nav").toggleClass("active");
		$("body").toggleClass("active-menu");
	});

  $('.harmonic div').on('click', function() {
    $('.harmonic div').removeClass('active');
    $(this).addClass('active');
  });
});
