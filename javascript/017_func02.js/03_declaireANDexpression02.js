//표현식과 선언문의 차이

//(1) 문법이 다름

  //선언문 : 코드흐름 중간에 독자적인 구문형태로 존재
  function sum(a, b){
      return a + b;
  }

  //표현식 : 구문구성 내부에 생성됨 보통 할당연산자 =를 이용해 만든 "할당 표현식" 우측에 생성됨

  let sum = function(a, b) {
      return a + b;
  };




//(2) 함수 생성 시점이 다름

  //표현식 : 실제 실행 흐름이 함수에 도달했을 때 함수를 생성 (함수에 도달해야 할당/호출 가능함)

  sayHi("Jhon"); //error
  let sayHi = function(name){
      alert (`Hello ${name}`);
  };

  //선언문 (전역함수선언문) : 함수 선언문 정의되기 전에도 호출 가능
  
  sayHi("Jhon"); //Hello, Jhon
  function sayHi(name){
      alert (`Hello ${name}`);
  }



//(3) 스코프

  //선언문 : 코드 블록 내 위치했을 때 블록 내 어디서든 접근할 수 있으나 블록 밖에서는 함수에 접근불가

    let age = prompt("나이를 입력해주세요", 18);

    //조건에 따라 함수 선언
    if ( age < 18) {
      function welcome() {
        alert("안녕!");
      }
    }
    else {
      function welcome() {
        alert("안녕하세요!");
      }
    }

    welcome(); //함수 나중에 호출했을 때 에러 발생


    //다른 예시//다른 예시//다른 예시//다른 예시//다른 예시


    let age2 = 16;

    if ( age2 < 18) {
      welcome();          //실행 가능

      function welcome(){
        alert("안녕!");
      }

      welcome();         //실행 가능
    }

    welcome()              //실행 불가



  //표현식 : if문 밖에서 wellcome 함수를 호출하기 위해 if문 밖에서 welcome에 함수 표현식 함수를 할당함

    let age3 = prompt("나이를 입력해주세요", 18);

    let welcome;

    if(age < 18) {
      welcome = function() {
        alert("안녕!")
      };
    } else {
      welcome = function() {
        alert("안녕하세요!");
      };
    }

    welcome();

      //다른 예시//다른 예시//다른 예시//다른 예시//다른 예시

    let age4 = prompt("나이를 입력해주세요", 18);

    let welcome = (age4 < 18) ?
    function() {alert("안녕!")} :
    function() {alert("안녕하세요!")};

    welcome();