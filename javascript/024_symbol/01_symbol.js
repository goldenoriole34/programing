// 자바스크립트는 객체 프로퍼티 키로 오직 문자형과 심볼형만을 허용함. 숫자형, 불린형 모두 불가능하고 오직 문자형과 심볼형만 가능

// 심볼형 키를 사용할 때의 이점

// '심볼(symbol)'은 유일한 식별자(unique identifier)를 만들고 싶을 때 사용

let id = Symbol('id');  //id라는 심볼에 id라는 설명이 붙음

// 심볼은 유일성이 보장되는 자료형이기 때문에, 설명이 동일한 심볼을 여러 개 만들어도 각 심볼값은 다름
// 심볼에 붙이는 설명(심볼 이름)은 어떤 것에도 영향을 주지 않는 이름표 역할만 함

let id1 = Symbol("id");
let id2 = Symbol("id");

alert (id1 == id2); //false


// 주의사항
// 심볼은 문자형으로 자동 형 변환되지 않음
let id3 = Symbol("id");
alert(id3); // TypeError: Cannot convert a Symbol value to a string

// 심볼을 반드시 출력해줘야 하는 상황이라면 아래와 같이 .toString() 메서드를 명시적으로 호출
let id4 = Symbol("id");
alert(id4.toString()); // Symbol(id)가 얼럿 창에 출력됨

// symbol.description 프로퍼티를 이용하면 설명만 보여주는 것도 가능
let id5 = Symbol("id");
alert(id5.description); // id