function 아반떼(){
  console.log('아반떼 go')
}

function 소나타(){
  console.log('소나타 go')

}

function 제네시스(){
  console.log('제네시스 go')

}

setTimeout(아반떼, 1000) //1초 뒤에
setTimeout(소나타, 2000) //2초 뒤에
setTimeout(제네시스, 3000) //3초 뒤에
//총 걸린 시간 3초

//아반떼가 1초
//아반떼 후 1초 지나고 소나타
//소나타 후 1초 지나고 제네시스를 호출 하려면??
  //1) callback
  //2) promise
  //3) async /await



function 아반떼(callback){
  console.log('아반떼 go')
  callback()
}

function 소나타(callback){
  console.log('소나타 go')
  callback()
}

function 제네시스(){
  console.log('제네시스 go')

}

function 자동차경주(){
  아반떼( () => {
    소나타( () => {
      제네시스()
    })
  })
}

자동차경주()


//자동차경주() 먼저 콜스택에 1번쨰로 담김
//자동차경주 내 함수 모두 호출됨
  // 1) 아반떼가 콜스택에 2번째로 담김
  // 2) 소나타가 콜스택에 3번째로 담김
  // 3) 제네시스가 콜스택에 4번째로 담김