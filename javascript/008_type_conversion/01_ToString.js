//alert() 메서드는 매개변수로 문자형만 받음
//따라서 다른 타입의 매개변수를 입력하면 자동으로 문자형으로 변경됨

let examNumber = true;
alert(typeof(examNumber)); //boolean

examNumber = String(examNumber);
alert(typeof(examNumber));