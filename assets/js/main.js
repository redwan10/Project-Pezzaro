(function($){
    "use strict";
    // Mobile menu
    jQuery('#mobile-menu-active').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991"
    });



    // Main slider
    $('.hero-area-slider').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        arrows: false,
        fade: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    });


    //  Product Slider
  $('.product-slider-active').slick({
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: false,
    fade: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1500,
        settings: {
          arrows: false,
          dots: false,
          infinite: true,
          autoplay: false,
          fade: false,
          speed: 300,
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },{
        breakpoint: 1350,
        settings: {
          arrows: false,
          dots: false,
          infinite: true,
          autoplay: false,
          fade: false,
          speed: 300,
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },{
        breakpoint: 992,
        settings: {
          arrows: false,
          dots: false,
          infinite: true,
          autoplay: false,
          fade: false,
          speed: 300,
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },{
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: false,
          infinite: true,
          autoplay: false,
          fade: false,
          speed: 300,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });





})(jQuery);