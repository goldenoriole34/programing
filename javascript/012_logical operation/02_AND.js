// && (AND) 연산자

alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false

//두 피연산자가 모두가 참일 때 true를 반환. 그 외의 경우는 false를 반환


// 첫 번째 피연산자가 truthy이면,
// AND는 두 번째 피연산자를 반환합니다.
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

// 첫 번째 피연산자가 falsy이면,
// AND는 첫 번째 피연산자를 반환하고, 두 번째 피연산자는 무시합니다.
alert( null && 5 ); // null
alert( 0 && "아무거나 와도 상관없습니다." ); // 0