function sum (a, b) {
    return a + b;
}

let result = sum(1, 2);
alert(result); //3

//실행 흐름이 지시자 return을 만나면 함수 실행은 즉시 중단되고 값을 반환함



//여러개의 return문이 발생할수도 있음

function checkAge(age) {
    if (age >= 18) {
        return true;
    } else { 
        return confirm ("보호자의 동의를 받으셨나요?");
    }
}

let age = prompt ("나이를 입력하세요" ,18);

if ( checkAge(age) ) {
    alert("접속허용")
} else {
    alert("접속차단")
}

//return문이 없거나 return 지시자만 있는 함수는 undefined를 반환함
//return 지시자만 있는 경우도 undefined를 반환. return은 return undefined와 동일하게 동작

//return과 값 사이에 절대 줄을 삽입하지 않는다.