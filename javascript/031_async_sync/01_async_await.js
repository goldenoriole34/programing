//정상예제

function setTimeoutPromise(timeout) {
  return new Promise((resolve, reject)=>{
      setTimeout(() => {
         resolve(); 
      }, timeout);
  })
}

// async await
async function timeoutCheckAdult(age, timeout) {
  
  console.log(`${age}. timeoutCheckAdult`);
  await setTimeoutPromise(timeout);
  console.log(`${age}. timeoutCheckAdult`);

  if (age > 20) return true;
  return false;
}

async function asyncCheckAdult(age) {
  if (age >= 20)  { return age; }
  else throw new Error(age);
}


async function testAsyncAwaitFunc()
{

  let promises = [];

  promises.push(timeoutCheckAdult(10, 8000));
  promises.push(timeoutCheckAdult(20, 5000));
  promises.push(timeoutCheckAdult(30, 1000));

  let results = await Promise.all(promises);
  console.log(results);


}

testAsyncAwaitFunc();
