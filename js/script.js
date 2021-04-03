// Bennar Slider
$(function(){
    $(window).load(function() {
        $('#slider').nivoSlider({
        effect: 'random',
        slices: 15,
        // boxCols: 8,
        // boxRows: 4,
        animSpeed: 500,
        pauseTime: 3000,
        startSlide: 0,
        directionNav: true,
        controlNav: false,
        controlNavThumbs: false,
        pauseOnHover: true,
        manualAdvance: true,
        prevText: '<span class="b_icon"><i class="far fa-arrow-left"></i></span>',
        nextText: '<span class="b_icon"><i class="far fa-arrow-right"></i></span>',
        randomStart: true
       
        });
    });

        // About Slider
        $('.about_slider').slick({
          dots: true,
          infinite: true,
          speed: 300,
          slidesToShow: 1,
          slidesToScroll: 1,
          // autoplay:true,
          arrows:false,
        });


// CounterUP
$('.counter').counterUp({
    delay: 10,
    time: 3000
});

// Slick Courese
$('.slide_course').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay:true,
    arrows:true,
    prevArrow:'<i class="far fa-angle-left prev_arrow"></i>',
    nextArrow:'<i class="far fa-angle-right next_arrow"></i>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
// Slick Testimonials
$('.testi_slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay:true,
    arrows:true,
    prevArrow:'<i class="far fa-angle-left prev_arrow_testi"></i>',
    nextArrow:'<i class="far fa-angle-right next_arrow_testi"></i>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

// Celendar
$('#example').calendar({
  // onSelect: function (event) {
  //   $('.output').text(event.label);
  // },
  months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  color: '#ff0000',

});

// Footer Slider
// Slick Courese
$('.foot_slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 7,
  slidesToScroll: 1,
  // autoplay:true,
  arrows:false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
});


})

//Navbar Sticy Header
$(function(){
  $(window).scroll(function(){
    var topBar =$(this).scrollTop();
    if(topBar >100){
      $('#topbar').addClass('add_topbar');
    }
    else{
      $('#topbar').removeClass('add_topbar');
    }
  });

  $(window).scroll(function(){
    var nav_Bar =$(this).scrollTop();
    if(nav_Bar >100){
      $('.navbar').addClass('add_navbar');
    }
    else{
      $('.navbar').removeClass('add_navbar');
    }
  });
})

