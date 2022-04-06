let user = {     // 객체
  name: "John",  // 키: "name",  값: "John"
  age: 30,        // 키: "age", 값: 30
  "likes birds" : true,
};


//표현식의 평가 결과를 프로퍼티 키로 사용할 수 있다.

let key = "likes birds";

user[key] = true; // user["likes birds"] = true; 와 같다.

//key를 이용해 유동적으로 활용 가능한 코드도 만들 수 있다.

let key2 = prompt("사용자의 어떤 정보를 얻고 싶으신가요?", "name");

// 변수로 접근
alert( user[key2] ); // John (프롬프트 창에 "name"을 입력한 경우)
alert( user.name ); // error (점 표기법은 불가능하다)