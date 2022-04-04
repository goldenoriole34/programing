// let accseeAlowed;
// let age = prompt("나이를 입력하세요" , "");

// if(age > 18) {
//     accseeAlowed = true;
// } else {
//     accseeAlowed = false;
// }

// let accseeAlowed = (age > 18) ? true : false;

// alert(accseeAlowed);

//괄호가 있으나 없으나 차이는 없지만, 코드의 가독성 향상을 위해 괄호를 사용할 것을 권유




//다중 ?

let age = prompt("나이를 입력하세요" , "18");

let message = (age < 3) ? "아기야 안녕?" :
    (age < 18) ? "안녕!" :
    (age < 100) ? "환영합니다!" :
    "아주 나이가 많으시거나, 나이가 아닌 값을 입력하셨군요!";

alert(message);