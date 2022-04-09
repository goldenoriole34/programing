// 생성자 함수를 사용하면 매개변수를 이용해 객체 내부를 자유롭게 구성
// 아래 예시에서 new User(name)는 프로퍼티 name과 메서드 sayHi를 가진 객체를 만들어줌

function User(name) {
  this.name = name;

  this.sayHi = function() {
    alert( "제 이름은 " + this.name + "입니다." );
  }
}

let bora = new User("이보라");

bora.sayHi(); // 제 이름은 이보라 입니다.