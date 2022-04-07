// 객체 리터럴에서 this 사용하기
function makeUser (){
  return {
    name : "john",
    ref : this,
  };
};

let user = makeUser();

alert( user.ref.name); //john이 아니라 error

// 에러가 발생하는 이유는 this 값을 설정할 땐 객체 정의가 사용되지 않기 때문
// this 값은 호출 시점에 결정됨.

// 위 코드에서 makeUser() 내 this는 undefined
// 메서드로써 호출된 게 아니라 함수로써 호출되었기 때문.

// this 값은 전체 함수
// 코드 블록과 객체 리터럴은 여기에 영향을 주지 않음

// 따라서 ref: this는 함수의 현재 this 값을 가져옴.
