//########################################
//############ 함수 표현식 ##################
//########################################

//함수 선언방식
function sayHi() {
    alert("Hello");
}
alert(sayHi); //sayHi()가 아니기 때문에 실행되지는 않고 코드만 보임


//함수 표현식 (익명함수를 만들어 변수에 함수가 할당 됨)
let sayHi = function() {
    alert("Hello");
}; // 함수표현식은 끝에 세미콜론 필요함 let sayHi(){}이 구문이기 때문임

//변수를 복사해 다른 변수에 할당하는 것처럼 함수를 복사해 다른 변수에 할당가능

//(1) 함수 생성
function sayHi () {
    alert("Hello");
}

//(2) 함수 복사
let func = sayHi;

//(3) 복사한 함수 실행
func(); //Hello

//(4) 기존 함수도 실행가능
sayHi();