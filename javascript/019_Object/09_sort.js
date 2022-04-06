//정렬

//정수 프로퍼티(integer property)는 자동으로 정렬되고,
//그 외의 프로퍼티는 객체에 추가한 순서 그대로 정렬

let codes = {
  "49": "독일",
  "41": "스위스",
  "44": "영국",
  // ..,
  "1": "미국"
};

for (let code in codes) {
  alert(code) // 1, 41, 44, 49
}

