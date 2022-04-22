
//new promise와 resolve, reject가 필요없어짐 - 편해진만큼 내부구조가 어려움
async function asyncCheckAdult(age){
  if(age >= 20) {
    setTimeout( ()=> {
      return age
    }, timeout); 
  } //성공했을때
  else throw new Error(age) //실패했을때
}

//await : async 함수가 종료될때까지 기다린다.

async function testAsyncAwaitFunc(){ //await 사용시 조건2 async함수 안에서만 사용 가능하여 감싸줌
  const promiseCheckAdult = await asyncCheckAdult(10, 2000);
  promiseCheckAdult.then((age )=> {
    console.log(`${age} is adult!!`);
  }).catch((age)=>{
    console.log(`${age} is not adult!!`);
  });


  const promiseCheckAdult1 = await asyncCheckAdult(21, 2000);
  promiseCheckAdult1.then((age )=> {
    console.log(`${age} is adult!!`);
  }).catch((age)=>{
    console.log(`${age} is not adult!!`);
  });
}

testAsyncAwaitFunc();