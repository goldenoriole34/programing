function ingoo() { //선언
  console.log('3')  //콘솔로그는 3을 찍지만 리턴값은 아니다
  return 4
}

function goak() { //선언
  console.log('1')
  return ingoo()
}

function hello(callback) { //선언
  goak()
  console.log('5')
  callback('6')
}
 
const result = ingoo() //호출    //4
hello(goak) //hello -> 호출          //goak은 선언
console.log(typeof result) //호출

// callstack