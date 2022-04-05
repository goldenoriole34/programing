//화살표 함수 ( 함수 표현식보다 더 간결함 )

//(1)과 (2)는 같은 함수임

//(1)
let sum = function(a, b) {
    return a + b;
}

//(2)
let sum2 = (a, b) => a + b;


//화살표 함수는 함수 표현식과 같은 방법으로 사용할 수 있고 동적으로 활용 가능하다.

let age = prompt("나이를 알려주세요", 18);

let welcome = (age < 18) ?
    ()=> alert("안녕") :
    ()=> alert("안녕하세요!");

welcome();