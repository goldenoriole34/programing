function a(callback){ //선언
  setTimeout(time2,0)  //비동기 -> 백그라운드 이동 (1)
  console.log('hello world') //호출
  setTimeout(time,0) //비동기 -> 백그라운드 이동 (2)
  callback() // 5
}

console.log(3) //호출

function time2(){ //선언
  console.log('hi')
}

function time(){ //선언
  console.log('5')
}

a(time) //이 친구로 인해 a(callback)이 바로 실행됨


// 3 -> 'hello world' -> 5 -> hi -> 5

// event loop
// 얇코
// 제로초