let message = "Hello!";
let phrase = message;

//변수엔 객체가 그대로 저장되는 것이 아니라, 객체가 저장되어있는 '메모리 주소’인 객체에 대한 '참조 값’이 저장됨

let user = { name: 'John' };

let admin = user;

admin.name = 'Pete'; // 'admin' 참조 값에 의해 변경됨

alert(user.name); // 'Pete'가 출력됨.