document.addEventListener("DOMContentLoaded", function () {
    let banerSwiper = new Swiper(".banerSwiper", {
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next-slider_2",
            prevEl: ".swiper-button-prev-slider_2",
        },
        // breakpoints: {
        //     300: {
        //         slidesPerView: 1,
        //         spaceBetween: 30
        //     },
        //     1044: {
        //         slidesPerView: 2,
        //         spaceBetween: 30
        //     },
        //     1636: {
        //         slidesPerView: 3,
        //         spaceBetween: 30
        //     }
        // }
    });
    let nalSwiper = new Swiper(".nalSwiper", {
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: false,
        // },
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: ".nal-button-next-slider_2",
            prevEl: ".nal-button-prev-slider_2",
        },
        pagination: {
            el: ".nal-pagination",
        },
        breakpoints: {
            750: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            1044: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            1520: {
                slidesPerView: 4,
                spaceBetween: 30
            }
        }
    });
    let newsSwiper = new Swiper(".newsSwiper", {
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: false,
        // },
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: ".news-button-next-slider_2",
            prevEl: ".news-button-prev-slider_2",
        },
        breakpoints: {
            750: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            1520: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        }
    });
    let compSwiper = new Swiper(".compSwiper", {
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 30,
        navigation: {
            nextEl: ".comp-button-next-slider_2",
            prevEl: ".comp-button-prev-slider_2",
        },
        // breakpoints: {
        //     300: {
        //         slidesPerView: 1,
        //         spaceBetween: 100
        //     },
        //     750: {
        //         slidesPerView: 2,
        //         spaceBetween: 100
        //     },
        //     1610: {
        //         slidesPerView: 4,
        //         spaceBetween: 100
        //     }
        // }
    });
});