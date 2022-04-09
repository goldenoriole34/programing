// 생성자 함수에는 return 문이 없음 ( 보통 )
// 객체를 return 한다면 this 대신 객체가 반환됨
// 원시형을 return 한다면 return문이 무시됨

function BigUser() {
  this.name = "원숭이";
  return { name : "고릴라" };  // <-- this가 아닌 새로운 객체를 반환함
}

alert ( new BigUser().name ); //고질라


//다른예시


function SmallUser() {
  this.name = "원숭이";
  return; // this를 반환함
}

alert (new SmallUser().name); //원숭이



//인수가 없는 생성자 함수는 괄호를 생략해 호출할 수 있지만 권장하지는 않는다

let user1 = new User; // <-- 괄호가 없음
// 아래 코드는 위 코드와 똑같이 동작
let user2 = new User();