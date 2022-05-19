const time = () => ( parseInt (Math.random() * 10 ) + 1 ) * 1000


console.log('경기 시작')

const 아반떼 = (cb) => {
  return new Promise( (resolve, reject)=>{
    setTimeout( () => {
      resolve('아반떼 끝')
    }, time())
    console.log('아반떼 시작')
  })
}

const 소나타 = () => {
  return new Promise( (resolve, reject)=>{
  setTimeout( () => {
      resolve('소나타 끝')
    }, time())
    console.log('소나타 시작')
  })
}

const 제네시스 = () => {
  return new Promise( (resolve, reject) => {
    setTimeout( () => {
      console.log('제네시스 끝')
    }, time())
    console.log('제네시스 시작')
  })
}

아반떼()
.then(data => {
  console.log(data)
  return 소나타()
})
.then(data => {
  console.log(data)
  return 제네시스()
})
.then(data => {
  console.log(data)
})