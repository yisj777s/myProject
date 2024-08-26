// 10.파노라마 회사 소개 페이지 제작하기
const circle = document.querySelector("#circle");
const article = circle.querySelectorAll("article");

//article의 전체 개수만큼 반복하면서 mouseenter, mouseleave 이벤트 연결
for(let el of article) {
  //article에 마우스 포인터를 올리면 부모인 #circle의 animation-play-state값을 "paused"로 변경
  el.addEventListener("mouseenter", () => {
    circle.style.animationPlayState = "paused";
  });

  //article에서 마우스가 떠나면 부모인 #circle의 animation-play-state값을 다시 "running"으로 변경
  el.addEventListener("mouseleave", () => {
    circle.style.animationPlayState = "running"
  });
}