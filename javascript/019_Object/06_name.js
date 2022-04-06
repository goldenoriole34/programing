//변수 이름은 예약어로 사용 불가하지만
//객체 프로퍼티는 사용 가능

let obj = {
  for : 1,
  let : 2,
  return : 3,
};

alert( obj.for + obj.let + obj.return); //6



//문자형이나 심볼형에 속하지 않은 값은 문자열로 자동 형 변환됨
//0을 넣으면 "0"으로 자동 변환됨

let obj2 = {
  0 : "test", // "0" : "test" 와 동일
}

alert(obj2[0]); //"test"
alert(obj2["0"]); //"test"



//역사적인 이유 때문에 특별 대우를 받는 이름 (__proto__)

let obj3 = {};
obj3.__proto__ = 5;
alert(obj3.__proto__); // 5가 아닌 [object Object]
