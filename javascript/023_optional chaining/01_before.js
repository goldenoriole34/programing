//옵셔널 체이닝(optional chaining) ?.을 사용하면 프로퍼티가 없는 중첩 객체를 에러 없이 안전하게 접근할 수 있음

//옵셔널 체이닝이 없던 경우 객체 접근 처리

let user = {}; // 주소 정보가 없는 사용자

alert(user.address.street); // TypeError: Cannot read property 'street' of undefined

alert( user && user.address && user.address.street ); // undefined, 에러가 발생하지 않음.
