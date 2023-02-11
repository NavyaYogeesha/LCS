function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(51.508742, -0.120850),
        zoom: 5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
var swiper = new Swiper('.swiper-client-container', {
    slidesPerView: 5,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        1024: {
            slidesPerView: 5,
            spaceBetween: 20,
            centeredSlides: true,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 40,
        }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

var swiper = new Swiper('.swiper-testimonial-container', {
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        1024: {
            slidesPerView: 1,
            spaceBetween: 20,
            centeredSlides: true,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 40,
        }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
/*
	variables
*/

var $imagesSlider = $(".gallery-slider .gallery-slider__images>div"),
    $thumbnailsSlider = $(".gallery-slider__thumbnails>div");

/*
sliders
*/

// images options
$imagesSlider.slick({
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'linear',
    fade: true,
    draggable: false,
    arrows: false
});

// thumbnails options
$thumbnailsSlider.slick({
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    cssEase: 'linear',
    centerMode: false,
    draggable: false,
    focusOnSelect: true,
    asNavFor: ".gallery-slider .gallery-slider__images>div",
    prevArrow: '.gallery-slider__thumbnails .prev-arrow',
    nextArrow: '.gallery-slider__thumbnails .next-arrow',
    responsive: [{
            breakpoint: 720,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 350,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }
    ]
});
