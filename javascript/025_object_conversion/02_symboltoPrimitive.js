// Symbol.toPrimitive
// 자료형을 명명하는데 사용


obj[Symbol.toPrimitive] = function(hint) {
  // 반드시 원시값을 반환해야 합니다.
  // hint는 "string", "number", "default" 중 하나가 될 수 있습니다.
};


// user 객체에 객체-원시형 변환 메서드 obj [Symbol.toPrimitive] 구현
let user = {
  name : "John",
  money : 1000,
  
  [Symbol.toPrimitive](hint) {
    alert(`hint: ${hint}`);
    return hint == "string" ? `name: "${this.name}"` : this.money;
  }
};

alert( user ); //hint: string -> {name : John}
alert( +user ); // hint: number -> 1000
alert( user + 500 ); // hint: default -> 1500