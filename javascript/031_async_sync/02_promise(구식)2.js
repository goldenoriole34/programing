function asyncCheckAdult(age) {
  return new Promise( (resolve, reject) => {
    if( age >= 20) resolve(age);
    else reject(age);
  })
}

const promiseCheckAdult = asyncCheckAdult(10);

promiseCheckAdult.then((age )=> {
  console.log(`${age} is adult!!`);
}).catch((age)=>{
  console.log(`${age} is not adult!!`);
});

//=============================================

function asyncCheckAdult(age) {
  return new Promise( (resolve, reject) => {
    if( age >= 20) resolve(age);
    else reject(age);
  })
}

const promiseCheckAdult1 = asyncCheckAdult(21);

promiseCheckAdult1.then((age )=> {
  console.log(`${age} is adult!!`);
}).catch((age)=>{
  console.log(`${age} is not adult!!`);
});


// promiseCheckAdult과 promiseCheckAdult1의 위치나 순서 상관없이 resolve값이 무조건 reject보다 먼저 실행된다