// 수학과 관련된 함수와 표현식에서 자동으로 숫자형 변형이 일어남
alert("6" / "2");

//string
let examString = "123";
alert(typeof(examString));

//number
let examNumber = Number(examString);
alert(typeof(examNumber)); 

// 숫자 이외 글자가 들어가있는 문자형은 숫자형 변환이 안된다.
// 하더라도 nan값이 나온다
let examError = Number("문자포함 123");
alert(examError);