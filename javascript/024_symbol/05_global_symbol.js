// 심볼은 이름이 같더라도 모두 별개로 취급되는데
// 이름이 같은 심볼이 같은 개체를 가리키길 원하는 경우

// 전역 심볼 레지스트리 안에 심볼을 만들고 해당 심볼에 접근하면, 이름이 같은 경우 항상 동일한 심볼을 반환해줌

// ################ Symbol.for(key)를 사용 #################
// 이 메서드를 호출하면 이름이 key인 심볼을 반환

let id = Symbol.for("id"); // 심볼이 존재하지 않으면 새로운 심볼을 만듬

// 동일한 이름을 이용해 심볼을 다시 읽음
let idAgain = Symbol.for("id");

//두 심볼은 같음
alert( id === idAgain ); //true


// ################ Symbol.keyFor(sym) #################
// 이름을 얻을 수 있음

let sym = Symbol.for("name");
let sym2 = Symbol.for("id");


alert( Symbol.keyFor(sym)); // name
alert( Symbol.keyFor(sym2)); // id

// Symbol.keyFor는 전역 심볼 레지스트리를 뒤져서 해당 심볼의 이름을 얻어냄
// 검색 범위가 전역 심볼 레지스트리이기 때문에 전역 심볼이 아닌 심볼에는 사용할 수 없음



//전역 심볼이 아닌 모든 심볼은 description 프로퍼티가 있음.
//일반 심볼에서 이름을 얻고 싶으면 description 프로퍼티를 사용

let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");

alert( Symbol.keyFor(globalSymbol)); // name, 전역심볼
alert( Symbol.keyFor(localSymbol)); // undefined, 로컬심볼
alert( localSymbol.description ); //name