// || (OR) 연산자

alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false
//인수 중 하나라도 true이면 true를 반환하고, 그렇지 않으면 false를 반환


let hour = 12;
let isWeekend = true;

if(hour < 10 || hour > 18 || isWeekend) {
    alert("영업시간이 아닙니다");
}

alert( 1 || 0 ); // 1 (1은 truthy임)

alert( null || 1 ); // 1 (1은 truthy임)
alert( null || 0 || 1 ); // 1 (1은 truthy임)

alert( undefined || null || 0 ); // 0 (모두 falsy이므로, 마지막 값을 반환함)

let firstName = "";
let lastName = "";
let nickName = "바이올렛";

alert( firstName || lastName || nickName || "익명"); // 바이올렛