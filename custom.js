





$('document').ready(function () {



// Menu jquery

$('.hamburger').on('click', function() {
    $(this).toggleClass('open');     // hamburger changes to "x" as a result o f ".open" class styles being applyed to it.
    $('.full-menu').toggleClass('full-menu--open');   // full-screen menu appears
})


// Main-nav jquery

$('.local-link').on('click', function() {
    $('.full-menu').toggleClass('full-menu--open');   // when a menu link is clicked, the full-screen menu fades away so that the user can see the page again (thus the new section they're taken to).
    $('.hamburger').toggleClass('open');  // when a menu link is clicked, the "x" menu shape turns back into a hamburger shape.
})




// Refreshes page each time browser is re-sized

// window.addEventListener('resize', function () {
//     "use strict";
//     window.location.reload();
// });



});
