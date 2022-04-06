let user = {     // 객체
  name: "John",  // 키: "name",  값: "John"
  age: 30,        // 키: "age", 값: 30
  "likes birds" : true,
};

//객체를 만들 때 객체 리터럴 안 프로퍼티 키가 대괄호로 둘러쌓여 있는 경우 계산된 프로퍼티라고 함
let fruit = prompt("어떤 과일을 구매하시겠습니까?", "apple");

let bag = {
  [fruit] : 5,
}

alert( bag.fruit );

//더 짧은 다른 예시//더 짧은 다른 예시//더 짧은 다른 예시//더 짧은 다른 예시//더 짧은 다른 예시

let fruit2 = prompt("어떤 과일을 구매하시겠습니까?", "apple");

let bag2={}
bag2[fruit] = 5;

alert( bag.fruit );

//대괄호 안에는 복잡한 표현식도 삽입 가능함
let fruit3 = prompt("어떤 과일을 구매하시겠습니까?", "apple");

let bag3={
  [fruit3 + 'Computers'] : 5, //bag.fruit3Computers = 5
};

alert( bag.fruit );


//점 표기법을 사용하다가 뭔가 복잡한 상황이 발생했을 때 대괄호 표기법으로 바꿔서 쓰는게 보통