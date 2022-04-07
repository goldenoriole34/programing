//객체는 실제 존재하는 개체를 표현하고자 할 때 생성
//사용자는 현실에서 장바구니에서 물건 선택하기, 로그인하기, 로그아웃하기 등의 행동을 함
//마찬가지로 사용자를 나타내는 객체 user도 특정한 행동을 할 수 있음

//make method
//user에게 인사할 수 있는 능력을 부여

let user = {
  name : "John",
  age : 30,
};

user.sayHi = function() {
  alert("Hi");
};

user.sayHi(); //Hi

// 함수 표현식으로 함수를 만들고, 객체 프로퍼티 user.sayHi에 함수를 할당
// 객체에 할당된 함수를 호출시 user가 인사함.
// 위처럼 객체 프로퍼티에 할당된 함수를 메서드(method)라고 함.



//이미 정의된 함수를 이용해서 만들 수도 있음

  // 함수 선언
  function sayHi() {
    alert("안녕하세요!");
  };

  // 선언된 함수를 메서드로 등록
  user.sayHi = sayHi;

  user.sayHi(); // 안녕하세요!


//단축 문법

// 아래 두 객체는 동일하게 동작합니다.
  user = {
    sayHi: function() {
      alert("Hello");
    }
  };

  // 단축 구문을 사용하니 더 깔끔해 보이네요.
  user = {
    sayHi() { // "sayHi: function()"과 동일합니다.
      alert("Hello");
    }
  };