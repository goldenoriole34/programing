// 화살표 함수는 일반 함수와는 달리 ‘고유한’ this를 가지지 않음
// 화살표 함수에서 this를 참조하면, 화살표 함수가 아닌 ‘평범한’ 외부 함수에서 this 값을 가져옴

let user = {
  firstName: "보라",
  sayHi() {
    let arrow = () => alert(this.firstName);
    arrow();
  }
};

user.sayHi(); // 보라

// 함수 arrow()의 this는 외부 함수 user.sayHi()의 this가 됨