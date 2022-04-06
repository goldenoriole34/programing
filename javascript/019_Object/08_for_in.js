// 객체의 모든 키를 나열 / 순회 가능.
//for..in은 앞서 학습했던 for(;;) 반복문과는 완전히 다름.

let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user) {
  //키
  alert(key);         //name, age, isAdmin
  alert(user[key]);   //John, 30, true
}


//key라는 임의로 설정한 반복변수 활용해야함!!!!!!!!!!!!

