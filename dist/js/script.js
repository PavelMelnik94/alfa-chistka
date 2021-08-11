// гамбургер. открыть-закрыть мобильное меню.
const hamburgerMenu = document.querySelector('.hamburger__menu'); // меню гамбургера

document.getElementById('hamburger').addEventListener('click', e => {
    hamburgerMenu.style.marginTop = '0px';
}) // кнопка гамбургера

document.querySelector('.hamburger-cross').addEventListener('click', e => {
    hamburgerMenu.style.marginTop = '-228px';
}); // кнопка закрытия меню

const hamburgerMenuItems = document.querySelectorAll('.hamburger__menu__items');

hamburgerMenuItems.forEach(item => {
    item.addEventListener('click', e => {
        hamburgerMenu.style.marginTop = '-228px';
    })
})


// to-top
window.onscroll = function () {
    let scrolled = window.pageYOffset || document.documentElement.scrollTop,
        topBtn = document.getElementById('topBtn');
    if (scrolled > 2000 ) {
        topBtn.classList.add('visible'); }
    else { topBtn.classList.remove('visible');}
}



// modal
const modal = document.querySelector('.modal'); //главный контейнер окна
const modalBackdrop = document.querySelector('.modal__backdrop'); //подложка
const modalCloseBtn = document.querySelector('.modal__content > img'); //крестик
const modalBtnOpen = document.querySelectorAll('.btn'); //получаем коллекцию всех кнопок на странице
const body = document.querySelector('body');

const onlyBtnModal = []; //тут будут все кроме двух кнопок "отправить"
//
modalBtnOpen.forEach((btn, i) => {
    if(i != 12 && i != 14) {
        onlyBtnModal.push(btn)
    }
})

onlyBtnModal.forEach(btn => {
    btn.addEventListener('click', e => {
        e.preventDefault();
        modalOpen();
    })
})

//открыть модальное
const modalOpen = () => {
    modal.style.display = 'flex';
    body.style.overflow = 'hidden';

}

//закрыть модальное
const modalClose = () =>  {
    modal.style.display = 'none';
    body.style.overflow = 'auto';
}

modalBackdrop.addEventListener('click', e => modalClose()) //закрывает по клику на подложку
modalCloseBtn.addEventListener('click', e => modalClose() ) //закрывает по крестику
//закрытие по Escape
document.addEventListener('keydown', e => {
    if (e.keyCode === 27) {
        e.preventDefault();
        modalClose();
    }

});


// когда документ загрузился, выполнить
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

//stock slider
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

    //testimonials slider
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
                spaceBetween: 10
            },
            // when window width is >= 640px
            992: {
                slidesPerView: 2,
                slidesPerGroup:2,
                spaceBetween: -45
            },
            1201: {
                slidesPerView: 3,
                slidesPerGroup:3,
                spaceBetween: 40
            }
        }
    });

    //testimonials nav arrow
        //prev
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



    //before-after slider
    //
    // let beforeAfterSlider = new Swiper(".before-after-slider", {
    //     autoplay: {
    //         delay: 4000,
    //     },
    //     loop: true,
    //     longSwipes: false,
    //     grabCursor: true,
    //     navigation: false,
    //     pagination: {
    //         el: '.swiper-pagination',
    //         type: 'bullets',
    //         clickable: true,
    //     },
    //     effect: 'fade',
    //     fadeEffect: {
    //         crossFade: true
    //     }, breakpoints: {
    //         // when window width is >= 320px
    //         320: {
    //             slidesPerView: 2,
    //             spaceBetween: 20,
    //             // direction: 'vertical',
    //             freeMode: true,
    //         },
    //         // when window width is >= 480px
    //         768: {
    //             slidesPerView: 3,
    //             spaceBetween: 30
    //         },
    //         // when window width is >= 640px
    //         992: {
    //             slidesPerView: 3,
    //             spaceBetween: 40
    //         }
    //     }
    // });


    // Params
    var sliderSelector = '.before-after__swiper-container',
        options = {
            init: false,
            speed:800,
            // slidesPerView: 3, // or 'auto'
            // slidesPerColumn: 2,
            // slidesPerGroup:3,
            // spaceBetween: 5,
            grabCursor: true,
            autoplay: {
                delay:3000
            },
            navigation: {
                nextEl: '.before-after__swiper-button-next',
                prevEl: '.before-after__swiper-button-prev',
            },
            breakpoints: {
                //с 1201 и выше
                1201: {
                    slidesPerView: 3,
                    slidesPerColumn: 2,
                    slidesPerGroup:1,
                    spaceBetween: 20,
                    grabCursor: false,
                    mousewheel: false,
                    allowSlideNext: false,
                    allowSlidePrev: false,
                    allowTouchMove: false,
                },
                //с 992 по 1201
                992: {
                    slidesPerView: 2,
                    slidesPerColumn: 1,
                    slidesPerGroup:2,
                    spaceBetween: 20,
                    grabCursor: true,
                    mousewheel: true,
                    allowSlideNext: true,
                    allowSlidePrev: true,
                    allowTouchMove: true,
                },
                //с 768 по 992
                768: {
                    slidesPerView: 2,
                    slidesPerColumn: 1,
                    slidesPerGroup:2,
                    spaceBetween: 20
                },
                576: {
                    slidesPerView: 2,
                    slidesPerColumn: 1,
                    slidesPerGroup:2,
                    spaceBetween: 20
                },
                //c 320 по 575
                315: {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup:1,
                    spaceBetween: 20
                    // loop: true,
                    // centeredSlides: true,
                    // centerSlidesBounds: true
                }
            },
            // Events
            on: {
                init: function(){
                    this.autoplay.stop();
                },
                imagesReady: function(){
                    this.autoplay.start();
                    this.el.classList.remove('loading');
                }
            }
        };
    var mySwiper = new Swiper(sliderSelector, options);

// Initialize slider
    mySwiper.init();

    const actualWidth = screen.width; //ловим ширину экрана пользователя



});


