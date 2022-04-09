new A() === new B();

function A(){}
function B(){}

let a = new A;
let b = new B;

alert ( a == b); // true



// 해답

let obj = {};

function A() { return obj; }
function B() { return obj; }

alert( new A() == new B() ); // true