
// 실습 1
// 프로그램이 3~10 사이의 랜덤한 값을 지정한다.
// 값을 하나 입력받아서 정답인지 아닌지 출력해준다.

let randomNum = Math.random() * 7 + 3; //3 ~ 10 사이의 랜덤한 값(난수)를 반환함 * 10은 정수값으로 변환하기 위해 사용

let gameNum = Math.round(randomNum);//반올림

let inputNum = prompt("3 ~ 10 사이의 숫자를 입력하세요", "3");

if(inputNum == gameNum) {
  alert("정답입니다.")
} else {
  alert("정답은" + gameNum + "입니다.")
}


let correctNum = Match.floor((Math.random() * 10)) % 8 + 3; //3 + 0 ~ 3 + 7

if(inputNum == correctNum) {
  alert("정답입니다")
} else {
  alert("땡!")
}