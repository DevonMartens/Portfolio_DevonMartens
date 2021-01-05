$(document).ready(function () {

    // Define the navbar as a variable
    var nav = $('.navbar');
   var aboutme = $('.aboutme'); 

    // off set the navbar
    var offsetnav = nav.offset().top-88.88;


    function scrollnavbar() {

        // Check the menus offset. 
        if ($(window).scrollTop() >= offsetnav) {

            //if it needs to be fixed do it
            $(menu).removeClass('nav-scroll');
            $(menu).addClass('fixed-top');

        } else {

            // Otherwise, leave it as is
            $(menu).addClass('nav-scroll');
            $(menu).removeClass('fixed-top');

        }
    }

    // call this function when scrolling the navbar
    document.onscroll = scrollnavbar;
});