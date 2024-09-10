$(document).ready(function () {
    $("button.mbMenu").click(function(){
        $(".menu").toggleClass("active");
      });
      $(".btnClose").click(function(){
        $(".menu").toggleClass("active");
      });

      $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    
})

$(window).scroll(function(){
  if ($(window).scrollTop() >= 200) {
      $('header').addClass('fixed-header');
  }
  else {
      $('header').removeClass('fixed-header');
  }
});

if ($(window).scrollTop() >= 200) {
  $('header').addClass('fixed-header');
}