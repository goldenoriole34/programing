// 배열을 생성하는 방법

let testArray = [ 1, 2, 3, 4, 5 ]; // 직접 선언
let testArray2 = new Array(5);  // new를 통한 선언

let testArray3 = [ 1, '2', [ 3, 4, 5 ], 4, 5 ]; // 배열의 내용물은 다양하게 넣을 수 있다. (숫자, 문자, 배열 등)


//배열을 출력하는 방법

testArray[0] = 100; // 배열 수정 0번째 배열에 100 삽입

// (1) for문 = 특정조건을 성립하는 i를 출력할 때 유용함
for(let i = 0; i < testArray.length; i++ ){  //
  testArray[i];
}

// (2) forEach = 특정 조건 없이 전체를 출력할 때 유용함
testArray.forEach( function (number, index, arr) { 
  console.log("number : " + number + ", index : " + index + ", arr : " + arr)
  console.log()
})

// 자주 사용하는 배열의 메소드
testArray.push(30); //뒤에 30을 추가함
testArray.pop(); //맨 뒤에 요소를 삭제
testArray.unshift(300); //맨 앞에 추가 push()에 비해 느려 추천되지 않음
testArray.shift(); //맨 앞에 있는 요소를 삭제 pop()에 비해 느려 추천되지 않음

let arryMultiple = testArray.map( x => x * 2); //매개로 받는 함수를 실행하여 새로운 배열(arryMultiple)에 담아주어야 한다.