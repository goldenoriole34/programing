// const name = (type) => {
//   if(type == 'send') {
//     send()
//     console.log('send 실행')
//   } else if ( type == 'call') {
//     call()
//     console.log('call 실행')

//   }
//   // call()이렇게 넣어준다.
//   return "ingoo"
// }
// name('call')

const name = (callback) => {
  callback()
  return 'ingoo'

}

const call = () => {
      console.log('call 실행')
  return 'hello'
}

//콜을 네임이 실행한 뒤 항상 실행되는것을 원할 때

const send = () => {
      console.log('send 실행')

  return " world"
}


name(send)

// send 함수가 name이 실행되면 그때 send 실행하고 싶을 때
// 선택적으로 call send가 실행되는 것을 원할때

//위 예제가 이해가 안될떄, 아래를 공부해야하낟.
//a(선언)와 a() (호출)의 차이

const a = () => {

}