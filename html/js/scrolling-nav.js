(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // if (target.length) {
      //   $('html, body').animate({
      //     scrollTop: (target.offset().top - 100)
      //   }, 2000, "easeInOutExpo");
      //     return false;
      // };


      if (target.length) {
        if($(window).width() <= 768) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 100)
          }, 2000, "easeInOutExpo");
        }
        else {
          $('html, body').animate({
            scrollTop: (target.offset().top - 0)
          }, 2000, "easeInOutExpo");
        };
      };

     


    }
  });

})(jQuery);
// End of use strict
