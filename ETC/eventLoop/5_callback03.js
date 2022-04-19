
function 아반떼(callback) {
  setTimeout(()=>{
      console.log('아반떼')
      callback()
  }, 1000)
}

function 소나타(callback) {
  setTimeout(()=>{
      console.log('소나타')
      callback()
  }, 2000)
}

function 제네시스(callback) {
  setTimeout(()=>{
      console.log('제네시스')
      // callback()
  }, 3000)
}

// 아반떼(소나타(제네시스)); // 아예 소나타가 호출되어버린다 선언이 아니라. 말도안되는 문법이 도니다

아반떼(
  () => {
    소나타( 제네시스 )
  }
);



//프로미스 변경 후
//프로미스는 객체

function 아반떼(callback){
  return new Promise( (resolve, reject) => { //promise는 백그라운드에서 처리됨 setTimeout과 같음
    setTimeout( () => {
      resolve('아반떼 go')
    }, 1000 )
  })
}

function 소나타(callback){
  return new Promise( (resolve, reject) => { //promise는 백그라운드에서 처리됨 setTimeout과 같음
    setTimeout( () => {
      resolve('소나타 go')
    }, 2000 )
  })
}

function 제네시스(callback){
  return new Promise( (resolve, reject) => { //promise는 백그라운드에서 처리됨 setTimeout과 같음
    setTimeout( () => {
      resolve('제네시스 go')
    }, 3000 )
  })
}

아반떼().then( (data) => {
  console.log(data)
  console.log(소나타())
  return 소나타()
})
.then ( (data) => {
  console.log(data)
  return 제네시스
})
.then ( (data) => {
  console.log(data)
})


//  더 쉽게 쓰는 방법

async function 자동차(){
  const result = await 아반떼()
  console.log(result)
  const result2 = await 소나타()
  console.log(result2)
  const result3 = await 제네시스()
  console.log(result3)
}

자동차()