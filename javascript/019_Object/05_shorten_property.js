//실무에선 프로퍼티 값을 기존 변수에서 받아와 사용하는 경우가 많음

function makeUser(name, age) {
  return {
    name, //name : name를 줄여서 쓸 수 있음
    age : 30,
  };
}

let user = makeUser("John", 30);
alert(user.name);//John

