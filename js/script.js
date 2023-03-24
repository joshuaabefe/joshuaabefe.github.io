 // Preloader
// Page loading animation
	
$(window).on('load', function() {
    $("#preloader").animate({
        'opacity': '0'
    }, 600, function(){
        setTimeout(function(){
            $("#preloader").css("visibility", "hidden").fadeOut();
        }, 300);
    });
});



// jQuery to collapse the navbar on scroll
$(document).ready(function() {
    $(".navbar-toggler").on("click", function () {
        $("#buttonX").toggleClass("fa-bars fa-times")
    });
    
    $(window).scroll(function () {
        if($(window).scrollTop() >= 20) {
            $(".navbar").addClass("navbar-shrink");
        }
        else {
            $(".navbar").removeClass("navbar-shrink")
        }
    });
});

// Typedtext
$(document).ready(function() {
    var typed = new Typed('#element', {
        strings: ['UI/UX Designer.', 'Web Developer.', 'Creative Freelancer.'],
        typeSpeed: 150,
        backSpeed: 75,
        loop: true,
        backDelay: 1000,
        startDelay: 500,
    });
});

// Swiper
$(document).ready(function() {
    const swiper = new Swiper('.swiper', {
    // If we need autoplay
        autoplay: {
            delay: 4000,
            disableOnInteraction: false
        },
    
    // Optional parameters
        direction: 'horizontal',
        loop: true,
  
    // If we need pagination
        pagination: {
        el: '.swiper-pagination',
        },
  
    // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    // Optional slide no
        slidesPerView: 3,

    // Optional media-query
        breakpoints: {
    // when window is <= 992px
        992: {
            slidesPerView: 3
         },
    // when window is <= 0px
        0: {
            slidesPerView: 1
        } 
    },
  
  });
  });


// create the back to top button
$(document).ready(function(){
	$(window).scroll(function () {
        if($(window).scrollTop() >= 50) {
			$(".back-to-top").fadeIn();
		} else {
			$(".back-to-top").fadeOut();
		}
	});
});
