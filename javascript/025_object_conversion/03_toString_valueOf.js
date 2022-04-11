// 구식이긴 하지만 형변환을 직접 할 수 있음

// 객체에 Symbol.toPrimitive가 없으면 자바스크립트는 아래 규칙에 따라 toString이나 valueOf를 호출합니다.
  // ㄴ hint가 'string’인 경우: toString -> valueOf 순(toString이 있다면 toString을 호출, toString이 없다면 valueOf를 호출함)
  // ㄴ 그 외: valueOf -> toString 순


// 일반 객체는 기본적으로 toString과 valueOf에 적용되는 다음 규칙을 따릅니다.
  // toString은 문자열 "[object Object]"을 반환합니다.
  // valueOf는 객체 자신을 반환합니다.


  let user = { name : "John"};

  alert( user ); // [obj obj]
  alert( user.valueOf() === user ); //true

  