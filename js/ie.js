// 13.핀터레스트 스타일의 반응형 웹 갤러리 제작하기
const ver = navigator.userAgent;
console.log(ver);

const isIE = /rv/i.test(ver);
console.log(isIE);

if(isIE){
  alert("파이어폭스 브라우저로 접속하셨네요. 이 웹 페이지는 익스플로러를 지원하지 않습니다. 다른 브라우저로 접속해주세요.")
}