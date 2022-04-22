
//excutor를 만들어서 넣어줘야 한다. 그냥 함수식도 되지만 관습적으로 화살표 함수를 사용한다.
//new promise 호출과 비동기 처리 시작
const promise = new Promise((resolve, reject) => {  // resolve, reject도 인자임과 동시에 함수를 호출할 수 있는 포인터이다. 인자의 이름은 변경 가능하나 관습적으로 쓴다.
  //new는 런타임에 할당이 된다. //컴파일과 런타임 메모리 할당의 차이에 대해 알아보기 (별도 블로그 작성)
  //시간이 오래 걸리는 실행문 ... 5초
  resolve()         
  reject()    //캐치가 찍히지 않는 이유 :  promise가 resolve와 reject 둘 중 하나만 실행시킨다. reject를 먼저 호출하면 resolve가 안찍힌다. 

});

//promise의 내장함수
//then -> resolve
//catch -> reject
promise.then(()=>{
  console.log('1. promise() then() called')
  }).catch(()=>{
    console.log('2.promise() catch() called')
  }
);

//선언
function testFunc1(){
  console.log('testFunc1()');

  let startTime = new Date().getTime()
  while( new Date().getTime() - startTime < 1000 );  // 1초가 지난 후 true 처리

  testFunc2();
}

//선언
function testFunc2(){
  console.log('testFunc2()');
}

//포인터 ()없을때
testFunc1;
//함수실행 ()있을때
testFunc1();


