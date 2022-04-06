//존재하지 않는 프로퍼티에 접근하면 에러가 발생하지 않는다

//프로퍼티 존재 여부를 확인할 수 있는 방법 2가지.

  //(1) undefined 활용

  let user = {};
  alert( user.noSuchProperty === undefined); // true // 존재하지 않음을 의미


  //(2) in 활용

  let user2 = {
    name : "Jhon",
    age:30
  };

  alert("age" in user);         // true    //존재함
  alert("blabla" in user);      // false   //존재하지 않음



//가끔 에러가 나는 경우가 있어 in 활용을 권장

let obj = {
  test : undefined
};

alert(obj.test); //true가 아닌 undefined가 출력됨
alert("test" in obj); //true //프로퍼티 유무를 제대로 확인할 수 있음