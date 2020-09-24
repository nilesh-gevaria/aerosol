$(document).ready(function(e) {    
    $(document).on("click", "#burgerIcon", function(e) {
        e.preventDefault(), $(this).toggleClass("open"), $("body").toggleClass("megamenu-active")
    }),

    $( '.megamenu__listItem a' ).on("click", function(){
        $('body').removeClass('megamenu-active');
        $('.order-3').removeClass('open');
    })
});

