//0, 빈 문자열, null, undifinedm NaN 은 false로 나옴
//그 외 값은 모두 true

alert(Boolean(1)); //숫자 1은 true
alert(Boolean(0)); //숫자 0은 false


alert(Boolean("hello")); //문자열은 true
alert(Boolean("")); //빈문자열은 false