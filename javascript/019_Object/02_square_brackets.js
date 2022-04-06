let user = {     // 객체
  name: "John",  // 키: "name",  값: "John"
  age: 30,        // 키: "age", 값: 30
  "likes birds" : true,
};

//여러 단어를 조합해 프로퍼티 키를 만든 경우엔, 점 표기법을 사용해 프로퍼티 값을 읽을 수 없다
//대활호 표기법을 이용해야한다.

//set
user["likes birds"] = true;

//get
alert(user["likes birds"]); // true

//delete
delete user["likes birds"];