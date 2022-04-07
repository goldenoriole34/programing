// 대부분의 메서드가 객체 프로퍼티의 값을 활용
//메서드 내부에서 this 키워드를 사용하여 객체에 접근할 수 있음

let user = {
  name : "john",
  age : 30,
  sayHi() {
    alert(this.name); // == alert(user.name);
  }
};

user.sayHi(); //john

// alert(user.name)에 대하여
// 간혹 위의 외부변수를 통해 객체를 참조하면 에러가 발생하는 경우가 있음

let user2 = {
  name: "John",
  age: 30,

  sayHi() {
    alert( user2.name ); // Error: Cannot read property 'name' of null
  }
};

let admin = user2;
user2 = null; // user를 null로 덮어씀

admin.sayHi(); // sayHi()가 엉뚱한 객체를 참고하면서 에러가 발생 this.name으로 사용해야함




// 함수에도 this를 사용할 수 있음

function sayHi() {
  alert( this.name );  //this 값은 런타임에 결정됨
}

//동일한 함수라도 다른 객체에서 호출했다면 'this’가 참조하는 값이 달라짐

let user_A = {name : "John"};
let admin_A = {name : "Admin"};

function sayHi_A() {
  alert( this.name );
}

user_A.f = sayHi_A;   // John (this == user_A)
admin_A.f = sayHi_A;  // Admin (this == admin_A)

admin_A['f'](); // Admin (점과 대괄호는 동일하게 동작함)