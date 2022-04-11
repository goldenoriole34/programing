//옵셔널 체이닝 등장 이후 객체 접근 처리

let user = {}; // 주소 정보가 없는 사용자

alert( user?.address?.street ); // undefined, 에러가 발생하지 않습니다.

// 예시에서 사용된 user?.는 user가 null이나 undefined인 경우만 처리할 수 있음.

// 변수 user가 선언되어있지 않으면 user?.anything 평가시 에러가 발생함