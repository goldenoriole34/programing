//객체 복사, 병합 및 할당
//기존에 있던 객체와 똑같으면서 독립적인 객체를 만들고 싶다면?


//(1)새로운 객체를 만든 다음 기존 객체의 프로퍼티들을 순회해 원시 수준까지 프로퍼티를 복사함

  let user = {
    name: "John",
    age: 30
  };

  let clone = {}; // 새로운 빈 객체

  // 빈 객체에 user 프로퍼티 전부를 복사해 넣습니다.
  for (let key in user) {
    clone[key] = user[key];
  }

  // 이제 clone은 완전히 독립적인 복제본이 되었습니다.
  clone.name = "Pete"; // clone의 데이터를 변경합니다.

  alert( user.name ); // 기존 객체에는 여전히 John이 있습니다.



//(2) Object.assign 방식

  let user2 = { name: "John" };

  let permissions1 = { canView: true };
  let permissions2 = { canEdit: true };

  // permissions1과 permissions2의 프로퍼티를 user로 복사합니다.
  Object.assign(user2, permissions1, permissions2);

  // user2 = { name: "John", canView: true, canEdit: true }

  //목표 객체(user2)에 동일한 이름을 가진 프로퍼티가 있는 경우엔 기존 값이 덮어씌워 집니다.

  let user3 = {
    name: "John",
    age: 30
  };
  
  let clone = Object.assign({}, user3);


//(3) 중첩 객체 복사
  let user4 = {
    name: "John",
    sizes: {
      height: 182,
      width: 50
    }
  };

  alert( user4.sizes.height ); // 182

  let clone = Object.assign({}, user);

  alert( user.sizes === clone.sizes ); // true, 같은 객체입니다.

  // user와 clone는 sizes를 공유합니다.
  user.sizes.width++;       // 한 객체에서 프로퍼티를 변경합니다.
  alert(clone.sizes.width); // 51, 다른 객체에서 변경 사항을 확인할 수 있습니다.
