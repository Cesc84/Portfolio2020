import $ from 'jquery';

/* Menu Global Variables */
var menu = $('.menu-icon');
var menuBtn = $('.title-bar');
var whiteDiv = $('.top-bar');
var mainContainer = $('.header');
var menuItem = $('.top-bar-right li a');
// var open = $('.open');

/* START TOGGLE MENU FUNCTIONS */
/* Toggle menu on click of the hamburger icon */
$(menu).on('click', function () {
  	$(this).toggleClass('open');
    menuBtn.toggleClass('open');
    whiteDiv.toggleClass('open');
    mainContainer.toggleClass('open');
    noScroll();
});

/* Reset the menu on click of one of menu elements */
$(menuItem).on('click', function () {
  menuBtn.toggleClass('open');
  menu.toggleClass('open');
  // whiteDiv.css('display', 'none');
  if(whiteDiv.hasClass('open')) {
    whiteDiv.removeClass('open');
  }
  mainContainer.toggleClass('open');
  noScroll();
});

/*
  Function to prevent the body to scroll when the menu is opened on mobile screens
  and to allow to scroll again when the menu is closed
*/
function noScroll() {
  if (!menu.hasClass('open')) {
    document.body.style.overflow = "";
    // whiteDiv.css('display', 'none');
  } else {
    document.body.style.overflow = "hidden";
    // if (width > 768) {
    //   whiteDiv.css('display', 'none');
    // }
  }
}
/* END TOGGLE MENU FUNCTIONS */

/*
  On click of the navigations elements of scrollbar go to the selected element
*/
$(document).ready(function() {
   $('li .showcase').click(function() {
     $('html, body').animate({
       scrollTop: $("#showcase").offset().top
      }, 1000)
    }),
    $('li .about').click(function() {
      $('html, body').animate({
        scrollTop: $(".bio").offset().top
       }, 1000)
    }),
    $('li .contact').click(function() {
      $('html, body').animate({
        scrollTop: $(".contact").offset().top
       }, 1000)
    }),
    $('.down').click(function() {
      $('html, body').animate({
        scrollTop: $("#showcase").offset().top
       }, 1000)
    }),
    $('.up').click(function() {
      $('html, body').animate({
        scrollTop: $("body").offset().top
       }, 1000)
    })
 });

var homepage = $('.home');
/*
  Types.js Animation on h1 and h3 in the Hero section
*/
$(document).ready(function() {
  if (homepage) {
    var typed = new Typed('.name', {
      strings: ["Francesco D'Aloé"],
      typeSpeed: 40
    });

    var typed = new Typed('.subtitle', {
      strings: ["Front-End &amp; Web Developer"],
      typeSpeed: 40
    });
  }
});


 /* SHRINK HEADER */
 window.onscroll = function() {
   scrollFunction();
 };
 /*
   Function to add the class desktop-shrink when scrolling the page
   so that the navigation background-color become white
 */
 function scrollFunction() {
   var width = $(window).width();
   var navBar = $('.nav-bar ');
   if (width > 768) {
     if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
       navBar.addClass('desktop-shrink');
     } else {
       navBar.removeClass('desktop-shrink');
     }
   } else {
     // if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
     //   navBar.addClass('mobile-shrink');
     // } else {
     //   navBar.removeClass('mobile-shrink');
     // }
   }
 }


 /*
  function to show the banner once the user
  click one card of the first row and 3 cards of the second row
 */
 $(document).ready(function(){

   /*
   *** first row - function to select the developer side ***
   */
   var $side = $('.side .skill'),
   $tech = $('.tech .skill');
   // side card
   $side.click( function(){
     var $this = $(this);
     $side.removeClass('selected');
     $this.addClass('selected');

     // check if we can show footer
     popupFooter();
   });

   // Tech cards
   $tech.click( function(){
     var $this = $(this);

     if( $this.hasClass('selected') ) {
       $this.removeClass('selected');
       console.log('Was selected before. Set it unselected.');
       console.log('We have less than 3 features selected');
     } else {
       if( $('.tech .skill.selected').length <3 ) {
         $(this).addClass('selected');
         console.log('We have 3 cards selected');
       } else {
         // do nothing as 3 cards selected
         console.log('We have 3 cards selected yet');
       }
     }

   // check if we can show footer
   popupFooter();

 });

 function popupFooter() {

   if( $('.side .skill.selected').length && $('.tech .skill.selected').length === 3 ) {
     $('.pop-up').css('display', 'block');
     console.log('Footer info ON');
   } else {
     $('.pop-up').css('display', 'none');
     console.log('Footer info OFF');
   }
 }
 });

 /* CV page - Close PopUp */
 function resetGrid() {
   $('.callout').click(function() {
     $('.skill.selected').removeClass('selected');
     $('.pop-up').hide();
   });
 }
 resetGrid();

var card = $('.item');
// var extra = $('.extra');
// var linkWebsite = $('.web-link');
var desc = $('.description');
var $this = $(this);

// for (var i = 0; i < card.length; i++) {
  // var xcard = card[i];
  // console.log(xcard);
  var n = 0;
  $(card).hover(
    function() {
      setTimeout(function() {
        $(this).addClass('hovered'); }.bind(this), 1500)
    },
    function(){ $(this).removeClass('hovered') }
  )
   // .mouseleave(function() {
   //   desc.css('display', 'none');
   // });
// }

// var n = 0;
//  $(card).mouseenter(function() {
//    if($(this)) {
//     n += 1;
//    }
//     if (n > 1) {
//       console.log(n);
//       $( this ).find('.extra').fadeIn();
//       $(this).find('.desc').fadeIn();
//     } else {
//       $(this).find('.extra').delay(1000).fadeIn();
//       $(this).find('.desc').delay(1000).fadeIn();
//     }
//     // linkWebsite.delay(1000).fadeIn();
//    	// desc.css('display', 'block');
//  })
//  .mouseleave(function() {
//    $(this).find('.extra').fadeOut();
//    $(this).find('.desc').fadeOut();
//  });


// Initialize AOS
AOS.init();
