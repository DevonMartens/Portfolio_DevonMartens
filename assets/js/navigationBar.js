
$(document).ready(function () {

    // Check the menus offset. 
    var menu = $('.navbar');
    var aboutme = $('.aboutme');

    // scrool
    var navScroll = menu.offset().top-88.88;


    function scroll() {

        // Check the menus offset. 
        if ($(window).scrollTop() >= navScroll) {

            //If it is beyond the offset, fix it to the top.
            $(menu).removeClass('nav-scroll');
            $(menu).addClass('fixed-top');

        } else {

    // Otherwise, leave it as is
            $(menu).addClass('nav-scroll');
            $(menu).removeClass('fixed-top');

        }
    }

      // call this function when scrolling the navbar
    document.onscroll = scroll;

});