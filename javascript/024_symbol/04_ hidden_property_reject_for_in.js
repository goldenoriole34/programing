// 키가 심볼인 프로퍼티는 for..in 반복문에서 배제됨

let id = Symbol("id");
let user = {
  name : "John",
  age : 30,
  [id] : 123
};

for (let key in user) alert(key); // name과 age만 출력됨, 심볼은 무시됨

alert( "직접 접근한 값 : " + user[id] ); // 직접 출력은 가능함

// Object.keys(user)에서도 키가 심볼인 프로퍼티는 배제됨
// '심볼형 프로퍼티 숨기기(hiding symbolic property)'라 불리는 이런 원칙 덕분에 외부 스크립트나 라이브러리는 심볼형 키를 가진 프로퍼티에 접근하지 못함


// '???????'
// 그런데 Object.assign은 키가 심볼인 프로퍼티를 배제하지 않고 객체 내 모든 프로퍼티를 복사함

let id2 = Symbol("id2");
let user2 = {
  [id2] : 123
};

let clone = Object.assign({}, user2);

alert( clone[id] ); //123