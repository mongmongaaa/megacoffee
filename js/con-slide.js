


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: 'bullets'
    },
   

});


var swiper = new Swiper(".menu_ul", {
    spaceBetween: 10,
    // loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: 'bullets'
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
       
       
          364: { //브라우저가 364보다 클 떄
            slidesPerView: 4,
            slidesPerGroup: 2,
          },
          760: { //브라우저가 760보다 클 떄
            slidesPerView: 2,
            slidesPerGroup: 2,
          }
      },
    //   breakpoints: {
        
    //     768: {
    //       slidesPerView: 2,  //브라우저가 768보다 클 때
    //       spaceBetween: 40,
    //     },
    //     1024: {
    //       slidesPerView: 3,  //브라우저가 1024보다 클 때
    //       spaceBetween: 50,
    //     },
      

});