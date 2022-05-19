function ingoo(){
  console.log('3')
  return 4
}

function goak(){
  console.log('1')
  return ingoo()
}

function hello(callback){ //hello(goak) **************************** 헷갈려함
  goak()
  console.log('5')
  callback('6')
}

const result = ingoo() //4
hello(goak)
console.log(typeof result)



// console.log('3')
// console.log('1')
// console.log('3')
// console.log('5')
// console.log('1')
// console.log('3')
// console.log('number')













// console.log('3')
// console.log('1')
// console.log('3')
// console.log('1')
// console.log('3')
// console.log('5')

