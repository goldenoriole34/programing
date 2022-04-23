//new promise와 resolve, reject가 필요없어짐 - 편해진만큼 내부구조가 어려움
async function asyncCheckAdult(age){
  if(age >= 20) { return age } //성공했을때
  else throw new Error(age) //실패했을때
}

function TimeoutCheckAdult(age, timeout){
  if(age >= 20) {
    setTimeout( ()=> {
      console.log(`asyncTimeoutCheckAdult(${age})`)
      return age
    }, timeout); 
  } //성공했을때
  // else throw new Error(age) //실패했을때 (왜 에러남?!?!?!?!?)
  else Error(age) //실패했을때 (왜 에러남?!?!?!?!?)
}


//await 키워드 사용 함수의 종료를 기다리지 않고 다음 함수를 호출한다.
async function testAsyncAwaitFunc(){ //await 사용시 조건2 async함수 안에서만 사용 가능하여 감싸줌

  await TimeoutCheckAdult(100, 2000);

  const promiseCheckAdult =  asyncCheckAdult(10); // {age:10}.then 
  const promiseCheckAdult3 = await asyncCheckAdult(10); // age:10.then(사용불가)
  // await promiseCheckAdult.then(() => {})
  await promiseCheckAdult.then((age) => {
    console.log(`${age} is adult!!`);
  }).catch( (age) =>{
    console.log(`${age} is not adult!!`);
  });


  const promiseCheckAdult1 =  asyncCheckAdult(21);
  promiseCheckAdult1.then((age) => {
    console.log(`${age} is adult!!`);
  }).catch((age)=>{
    console.log(`${age} is not adult!!`);
  });
}

testAsyncAwaitFunc();