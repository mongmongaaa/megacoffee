$("body").prepend("<header></header>");

$("header").load("./header.html header >div, header >ul", menu);

function menu() {
  // localStorage.num && $('header div ul').eq(localStorage.num);

  $("header .hdbg .head .menu_wrap ").on("mouseenter", function () {
    $(this).find("div").stop().slideDown();
    //h자신안에있는 div를 찾아서 이걸 실행해라
    //stop() 메소드는 실행시켜주는 걸 멈춰줌 올리면 나오고 다시 올려야 나타나게 해줌
    //slideToggle() slideDown()
  });

  $("header .hdbg .head .menu_wrap ").on("mouseleave", function () {
    $("header .hdbg .head .menu_wrap li>div").slideUp();
  });

  //meue

  const elmenubtn = document.querySelector(".burger_bg"),
    elmenu = document.querySelector(".media_menu"),
    elMenuA = document.querySelectorAll(".media_menu_wrap > li");

  elmenubtn.onclick = function menu2() {
    elmenubtn.classList.toggle("burger_active");
    elmenu.classList.toggle("menuactive");
  };



  if (matchMedia("screen and (max-width:760px)").matches) {

    $(".media_menu_wrap #togle").on("click", function () {
        let y = $(this).index();
        console.log(y);
        $("#togle >div").slideUp();
        $(this).find("div").stop().slideToggle();
    
        /*             $(this).toggleClass( 'active' ); */
    
        if ($(this).hasClass("active")) {
          $(".media_menu_wrap #togle").removeClass("active");
        } else {
          $(this).addClass("active");
        }
      });
  }
  
}
