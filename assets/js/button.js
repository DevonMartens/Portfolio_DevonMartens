//onclick function for if about is clicked
$(".about-btn").on("click", (event) => {
    event.preventDefault();
    // scrolls to about me
    $('html, body').animate({
        scrollTop: $(".aboutme").offset().top - 87
    }, 1000);
})
//onclick function for if projects is clicked
$(".projects-btn").on("click", (event) => {
    event.preventDefault();
    // scrolls to portfolio element
    $('html, body').animate({
        scrollTop: $(".portfolio").offset().top
    }, 1000);
})
//onclick function for if contact is clicked
$(".contact-btn").on("click", (event) => {
    event.preventDefault();
    // scrolls to contact element
    $('html, body').animate({
        scrollTop: $(".contact").offset().top - 87
    }, 1000);
})

//onclick function for if home is clicked
$(".home-btn").on("click", (event) => {
    event.preventDefault();
    // scrolls to contact element
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
})
//onclick function for if view work button is clicked
$(".view-work-btn").on("click", (event) => {
    event.preventDefault();
    // scrolls to portfolio element
    $('html, body').animate({
        scrollTop: $(".portfolio").offset().top
    }, 1000);
})
