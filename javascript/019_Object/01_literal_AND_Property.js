//객체 생성 방법

//(1) 객체 생성자 문법
let user1 = new Object();

//(2) 객체 리터럴 문법 (주로 사용함)
let user2 = {};


let user = {     // 객체
  name: "John",  // 키: "name",  값: "John"
  age: 30,        // 키: "age", 값: 30
  "likes birds" : true //여러 단어를 조합해 프로퍼티 이름을 만든 경우엔 프로퍼티 이름을 따옴표로 묶어줘야 함
};


alert(user.name); // John
alert(user.age); //age

//불린형 프로퍼티 추가
user.isAdmin = true;

//delete 연산자 사용해 프로퍼티 삭제 가능
delete user.isAdmin;