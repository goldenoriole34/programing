//'new' 연산자와 생성자 함수를 사용하면 유사한 객체 여러 개를 쉽게 만들 수 있다.

// 생성자 함수(constructor function)

//규칙 1) 함수의 첫 글자는 대문자로 시작
//규칙 2) 반드시 new 연산자를 붙여 실행

function User(name) {
  this.name = name;
  this.isAdmin = fase;
}

let user = new User("보라");

// 이제 위 내용은 아래 주석과 같음
// let user = {
//   name: "보라",
//   isAdmin: false
// };

alert(user.name); //보라
alert(user.isAdmin); //false


// new User(...)를 써서 함수를 실행하면 아래와 같은 알고리즘이 동작함.

// 빈 객체를 만들어 this에 할당.
// 함수 본문을 실행
// this에 새로운 프로퍼티를 추가해 this를 수정.
// this를 반환.


// new User("보라")이외에도 new User("호진"), new User("지민") 활용해
// 손쉽게 사용자 객체를 만들 수 있음 (재사용할 수 있는 객체 생성 코드를 구현)