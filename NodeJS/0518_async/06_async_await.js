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


const main = async () => {
  const result = await 아반떼 ()
  console.log(result)

  const result2 = await 소나타()
  console.log(result2)

  const result3 = await 제네시스()
  console.log(result3)

  console.log("경기 끝")

  return 'a'                  //return 값이 프로미스 객체로 나온다!!! 리액트 때 조심!!
}

main().then( data  => {
  console.log(data)
})