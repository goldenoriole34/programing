const time = () => ( parseInt (Math.random() * 10 ) + 1 ) * 1000


const 아반떼 = (cb) => {
  setTimeout( () => {
    console.log('아반떼 끝')
    cb()
  }, time())
  console.log('아반떼 시작')
}

const 소나타 = (cb) => {
  setTimeout( () => {
    console.log('소나타 끝')
    cb()
  }, time())
  console.log('소나타 시작')
}

const 제네시스 = (cb) => {
  setTimeout( () => {
    console.log('제네시스 끝')
    cb()
  }, time())
  console.log('제네시스 시작')
}

console.log('경기 시작')

아반떼( ()=>{
  소나타( ()=>{
    제네시스 ( ()=> {
      console.log('경기 끝')
    })
  } )
})