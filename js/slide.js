if (matchMedia("screen and (max-width: 760px)").matches) {
   
    var swiper = new Swiper(".menu_ul", {
        slidesPerView: 5,
        spaceBetween: 5,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            type: 'bullets'
        },
     
    });


  } else {

    var swiper = new Swiper(".menu_ul", {
        slidesPerView: 3,
        spaceBetween: 15,
        // loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            type: 'bullets'
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }
    });



  }





var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: 'bullets'
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

});