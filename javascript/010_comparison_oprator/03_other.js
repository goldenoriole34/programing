//다른 형을 가진 값 간의 비교하는 경우 숫자형으로 변경하여 비교함

alert('2' > 1); // true
alert('01' == 1) //true

alert(true == 1) //true
alert(false == 0) //true


//일치 연산자
alert( 0 == false); //true
alert( "" == false);//true
alert( 0 === false); //false

alert(null === undefined) //false
alert(null == undefined) //true
//null과 undefined는 숫자형으로 변환됩니다. null은 0, undefined는 NaN으로 변합니다.

alert(null > 0); //false (1)
alert(null == 0); //false (2)
alert(null >= 0); //true (3)
// (1)에서 null > 0이 거짓을, (3)에서 null >= 0이 참을 반환하는 이유는
//(기타 비교 연산자의 동작 원리에 따라) null이 숫자형으로 변환돼 0이 되기 때문
//undefined와 null을 비교하는 경우에만 true를 반환하고,
//그 이외의 경우(null이나 undefined를 다른 값과 비교할 때)는 무조건 false를 반환


//undefined는 비교가 불가능함

// 비교 연산자는 불린값을 반환합니다.
// 문자열은 문자 단위로 비교되는데, 이때 비교 기준은 '유니코드’순입니다.
// 서로 다른 타입의 값을 비교할 땐 숫자형으로 형 변환이 이뤄지고 난 후 비교가 진행됩니다(일치 연산자는 제외).
// null과 undefined는 동등 비교(==) 시 서로 같지만 다른 값과는 같지 않습니다.
// null이나 undefined가 될 확률이 있는 변수가 > 또는 <의 피연산자로 올 때는 주의를 기울이시기 바랍니다. null, undefined 여부를 확인하는 코드를 따로 추가하는 습관을 들이길 권유합니다.


