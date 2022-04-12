//객체 비교 시 동등 연산자 ==와 일치 연산자 ===는 동일하게 동작함

let a = {};
let b = a; // 참조에 의한 복사

alert( a == b ); // true, 두 변수는 같은 객체를 참조합니다.
alert( a === b ); // true



//다른예시
let aa = {};
let bb = {}; // 독립된 두 객체

alert( aa == bb ); // false

//비어있다는 점에서 같아 보이지만, 독립된 객체이기 때문에 일치·동등 비교하면 거짓이 반환