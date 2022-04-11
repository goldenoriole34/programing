// '?.'은 함수나 대괄호와 함께 동작하는 특별한 문법 구조체(syntax construct)임
// 한 객체엔 메서드 admin이 있지만 다른 객체엔 없는 상황


let user1 = {
  admin() {
    alert("관리자 계정입니다.");
  }
}

let user2 = {};

user1.admin?.(); // 관리자 계정입니다.
user2.admin?.();


// '?.()'를 사용해 admin의 존재 여부를 확인.
// user1엔 admin이 정의되어 있기 때문에 메서드가 제대로 호출
// 반면 user2엔 admin이 정의되어 있지 않았음에도 불구하고 메서드를 호출하면 에러 없이 그냥 평가가 멈추는 것을 확인할 수 있음


// .대신 대괄호 []를 사용해 객체 프로퍼티에 접근하는 경우엔 ?.[]를 사용할 수도 있음
// 위 예시와 마찬가지로 ?.[]를 사용하면 객체 존재 여부가 확실치 않은 경우에도 안전하게 프로퍼티를 읽을 수 있음

let user3 = {
  firstName: "Violet"
};

let user4 = null; // user2는 권한이 없는 사용자라고 가정

let key = "firstName";

alert( user3?.[key] ); // Violet
alert( user4?.[key] ); // undefined

alert( user3?.[key]?.something?.not?.existing); // undefined

// delete와 조합해 사용가능

delete user?.name; // user가 존재하면 user.name을 삭제

// '?.'은 읽기나 삭제하기에는 사용할 수 있지만 쓰기에는 사용할 수 없음