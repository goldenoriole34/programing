// 왼쪽 평가대상에 값이 없으면 즉시 평가를 멈춤

let user = null;
let x = 0;

user?.sayHi(x++); // 아무 일도 일어나지 않습니다.

alert(x); // 0, x는 증가하지 않습니다.