// window.addEventListener('load',function(){]
// 브라우저가 로드되고 그안의 스크립트에서 또 로드되는 상황 ( 이거기준 )그래서 이 로드는 쓸수가엄따

const elWrap = document.querySelectorAll(".menu_wrap_top li"),
  elContents = document.querySelectorAll(".midle > * "),
  elContentsDiv = document.querySelector("main .midle > #sec "),
  elAllContents = document.querySelector("main .midle");

// > *  직속 자식만 잡기

// 해당 뷰포트가 보이면 클래스 add
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      // 관찰 대상이 viewport 안에 들어온 경우 클래스를 추가
      if (entry.isIntersecting) {
        //< 보이느냐 안보이느냐 트루 펄스 나옴
        entry.target.classList.add("active");

        //     entry.target.elWrap[key].classList.add('active');
        //     console.log( entry.target.elWrap[key]);
        //     elWrap[key].classList.add('active');
      }
      // 그 외의 경우 클래스 제거
      else {
        entry.target.classList.remove("active");
      }
    });
  },
  { threshold: 0 }
); // < 이게 뷰포트의 반만 보일때 실행하겠다

// 관찰할 대상을 선언하고, 해당 속성을 관찰시킨다.
elContents.forEach((el) => {
  io.observe(el);
});

let pos = { y: 0, y2: 0, view: true };
let num = 0,
  timeout;
//num은 전역변수다 괄호안에 없으면 어디서든 쓸 수 있음 ~

let secArr = [];
elContents.forEach(function (ele) {
  if (ele.tagName != "FOOTER") {
    secArr.push(ele.getBoundingClientRect().y);
  } else {
    secArr.push(
      ele.getBoundingClientRect().y - (window.innerHeight - ele.offsetHeight)
    );
    //   푸터의 y값      -        // 해당 뷰 포트에서  푸터의 오프셋 값 빼기 ( 아래 남은 공간)
  }
});
console.log(secArr);

document.body.style = `height:${elAllContents.offsetHeight}px`;
// 보이는 뷰의 크기를 div의 크기로 바꿔준것임
elWrap[0].classList.add("active");
window.addEventListener("scroll", function () {
  pos.y = window.pageYOffset;
  //이건 그냥 이 자체에서 에러나는것일뿐 되긴 됨

  pos.view = pos.y > pos.y2 ? true : false;

  pos.y2 = pos.y;

  console.log(pos.view);

  clearTimeout(timeout);
  // 일정시간이 지난 후 정해진 코드를 실행
  timeout = setTimeout(function () {
    pos.view ? num++ : num--;
    console.log(num);
    if (num < 0) {
      num = 0;
    } // 넘값이 -로 넘어가지 못하게
    else if (num > secArr.length - 1) {
      num = secArr.length - 1;
    }
    //num값이 아래로 더 내려가지 못하게

    elAllContents.style = `transform:translateY(-${secArr[num]}px)`;
    //위에서 .y 값 구해줌
    elWrap[0].classList.remove("active");
    if (pos.view) {
      //내려갈때
      elWrap[num].classList.add("active");
      elWrap[num - 1].classList.remove("active");
    } else {
      //올라갈때
      elWrap[num + 1].classList.remove("active");
      elWrap[num].classList.add("active");
    }

    //리무브를 언제 시키냐

    // 아래로 내리면 숫자가 증가 위로 올리면 숫자 --
  }, 100);
});

// 버튼 클릭 시 해당 컨텐츠로 이동

elWrap.forEach(function (v, key) {
  elWrap[key].onclick = function add() {
    // elWrap[Num].classList.add('active');
    elWrap[num].classList.remove("active");
    this.classList.add("active");

    num = key;

    elAllContents.style = `transform:translateY(-${secArr[num]}px)`;
    // key값이 아니라 윗쪽 num이랑 아래랑 맞춰줘야함
  };
});

//체크해야할것
// 1. 트루값 펄스값 잘 나오는지
//2. 전체 묶는 선택자가 있는지

// 해야하는것 2 컨텐츠 1 or spot 하단에 도착할때 헤더 불들어온게 고정되면서
// 로고 이미지 바뀜
// 헤더 액티브 on 시 흰배경 고정
//로고 이미지 변경
// 알아내야할것 컨텐츠1의 옵셋값?
// if문 기본 뷰포트 보다 컨텐츠 1의 옵셋값 이 더 클 때 로고 이미지 변경하고 헤더 클래스 on하기

// })

//문제점 ~
//1. 왜 메뉴부터 시작하냐
//2. 스크롤이랑 온클릭이랑 따로 논다

if (matchMedia("screen and (max-width:px)").matches){

}
if ($(window).width() < 1280) {
  // window 크기가 1280보다 작을때
/* 
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("active");
        }
      });
    },
    { threshold: 0.5 }
  );
  elContents.forEach((el) => {
    io.observe(el);
  }); */
} else {
  // window 크기가 1280보다 클때

  const elHeader = document.querySelector("header");
  let HeaderHeight = elHeader.offsetHeight;
  console.log(elHeader.offsetHeight);
  window.onscroll = function () {
    let windowTop = window.scrollY;
    //스크롤 세로 값이 헤더 높이 (0) 보다 크면 헤더에 클래스 추가
    console.log(windowTop);
    if (windowTop > HeaderHeight) {
      elHeader.classList.add("active");
      // elHeaderLogo.  ='./img-index/logo_w.png'
    } else {
      elHeader.classList.remove("active");
    }

    setTimeout(() => {
      const elHeaderLogo = document.querySelector("header .megalogo");
      if (windowTop > HeaderHeight) {
        elHeaderLogo.src = "./img-index/logo_L.png";
      } else {
        elHeaderLogo.src = "./img-index/logo_b.png";
      }
    }, 100);
  };

  // 헤더를 떼다가 붙였기땜시 그 시간 시점 이후 0.1초 뒤에 실행
  // 이게 아래에 있어야 하는 이유는 이미지라서 그런가?
}
