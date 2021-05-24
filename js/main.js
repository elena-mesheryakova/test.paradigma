$(document).ready(function () {
  	$('.menu-burger').click(function() {
        $('.menu__nav').toggleClass('active');
        $('.menu-burger').toggleClass('active');
    });


    $('.info__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        dots: false,
        responsive: [
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
               
              }
            }
            
        ]

    });


    $(document).ready(function() {
      $('.popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
    
        fixedContentPos: false
      });
    });
    

    $('.image-popup-vertical-fit').magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      mainClass: 'mfp-img-mobile',
      image: {
        verticalFit: true
      }
      
    });
  
    $('.image-popup-fit-width').magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      image: {
        verticalFit: false
      }
    });
  
    $('.image-popup-no-margins').magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      closeBtnInside: false,
      fixedContentPos: true,
      mainClass: 'mfp-no-margins mfp-with-zoom', 
      image: {
        verticalFit: true
      },
      zoom: {
        enabled: true,
        duration: 300 
      }
    });
});