(function ($) {
    "use strict";

    // Initiate the wowjs
    new WOW().init();
 


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
     

// FAQ

document.querySelectorAll('.faq-toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
    const item = toggle.parentElement;

    
    document.querySelectorAll('.faq-item.faq-active').forEach(activeItem => {
      if (activeItem !== item) {
        activeItem.classList.remove('faq-active');
      }
    });

   
    item.classList.toggle('faq-active');
  });
});
    



// contact

// function sendWhatsAppMessage() {
//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const subject = document.getElementById("subject").value;
//     const message = document.getElementById("message").value;

//     const phoneNumber = "263771460995";
//     const fullMessage = `Name: ${name}%0AEmail: ${email}%0ASubject: ${subject}%0AMessage: ${message}`;
//     const url = `https://wa.me/${phoneNumber}?text=${fullMessage}`;

//     window.open(url, '_blank');
// }

    // testimonial
     $(document).ready(function () {
    $(".testimonial-carousel").owlCarousel({
      autoplay: true,
      smartSpeed: 1000,
      center: true,
      margin: 24,
      dots: true,
      loop: true,
      nav: false,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        992: {
          items: 3
        }
      }
    });
  });


   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });



    
})(jQuery);

