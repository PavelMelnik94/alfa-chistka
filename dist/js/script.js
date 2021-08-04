




const ready = function (cb) {
    // Check if the `document` is loaded completely
    document.readyState === "loading"
        ? document.addEventListener("DOMContentLoaded", function (e) {
            cb();
        })
        : cb();
};

// Usage


ready(function() {


    let stockSlider = new Swiper(".swiper-container", {
        autoplay: {
            delay: 4000,
        },
        loop: true,
        longSwipes: false,
        grabCursor: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
    });


    let testimonialsSlider = new Swiper(".testimonials-swiper", {
        autoplay: {
            delay: 4000,
        },
        loop: true,
        longSwipes: true,
        grabCursor: true,
        pagination: {
            el: '.testimonials__swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            // when window width is >= 480px
            768: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            // when window width is >= 640px
            992: {
                slidesPerView: 3,
                spaceBetween: 40
            }
        }
    });


    //testimonials nav arrow
        //prev
    document.querySelector('.testimonials__prev-slide')
        .addEventListener('click', event => {
            event.preventDefault()
            testimonialsSlider.slidePrev()
        })

        //next
    document.querySelector('.testimonials__next-slide')
        .addEventListener('click', event => {
            event.preventDefault()
            testimonialsSlider.slideNext()
        })
});


