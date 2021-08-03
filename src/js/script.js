




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


    let swiper = new Swiper(".swiper-container", {
        autoplay: {
            delay: 4000,
        },
        loop: true,
        effect: 'cubic',
        longSwipes: false,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
    });

});


