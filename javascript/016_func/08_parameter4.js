//매개변수 기본값을 설정할 수 있는 또 다른 방법

//함수 선언부에서 매개변수 기본값을 설정하는 것 대신 함수가 실행되는 도중에 기본값을 설정하는 게 논리에 맞는 경우

//일단 매개변수를 undefined와 비교하여 함수 호출 시 매개변수가 생략되었는지를 확인 후 선언

function showMessage(text) {
  if (text === undefined) {
    text = '빈 문자열';
  }

  alert(text);
}

showMessage(); // 빈 문자열

