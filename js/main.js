$(window).load(function() { // makes sure the whole site is loaded
      $('#status').fadeOut(); // will first fade out the loading animation
      $('#preloader').delay(320).fadeOut('slow'); // will fade out the white DIV that covers the website.
      $('body').delay(320).css({'overflow':'visible'});
    var menu_selectors = $('#navbar li');

    if(menu_selectors.css('visibility') == 'hidden'){
        menu_selectors.css('visibility', 'visible');
        menu_selectors.css('animation-name', 'fadeInDown');
    }
         // var menu_selectors = $('#navbar a');
         // var hashfilter = "." + location.hash.substr(1),
         //  actualA = $('.stuff-filter >li>a[data-filter="' + hashfilter + '"]'),
         //  stuff_selectors = $('.stuff-filter >li>a');

});
// $('[data-spy="scroll"]').each(function() {
//     $(this).scrollspy('refresh');
// });
// $('body').scrollspy({target: ".navbar", offset: -100});

$(document).ready(function() {
    var menu_selectors = $('#navbar li');

    $("#navbar a").on('click', function(event){
        menu_selectors.removeClass('active');
        $(this).parent().addClass('active');
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - $('#header').height() - 80
            }, 800, function(){
                window.location.hash = hash;
            });
        }});

 
  $("#bg-slider").owlCarousel({
      navigation : false, // Show next and prev buttons
      slideSpeed : 2000,
      autoPlay: 4000,
      paginationSpeed : 2000,
      singleItem:true,
      mouseDrag: false,
      transitionStyle : "fade",
      pagination: true
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false 
  });

  $("#testimonial-slider").owlCarousel({
      navigation : false, // Show next and prev buttons
      slideSpeed : 100,
      pagination : true,
      paginationSpeed : 100,
      singleItem:true,
      mouseDrag: false,
      transitionStyle : "goDown"
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false 
  });

    $('.more-jobs a').click(function(e){
      e.preventDefault();
      var $this = $(this);
      $this.toggleClass('more-jobs a');
      if($this.hasClass('more-jobs a')){
        $this.text('View less jobs');     
      } else {
        $this.text('View more jobs');
      }
    });

    $('.more-jobs a').click(function(){
      $('.table tr.hide-jobs').toggle();
    });


 
})

// Initializing WOW.JS

 new WOW().init();