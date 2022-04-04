let arg = prompt("값을 입력해주세요");

switch(arg) {
    case '0' :
    case '1' :
        alert("0이나 1을 입력했습니다.");
        break;
    case '2' :
        alert("2를 입력했습니다.");
        break;
    case 3 :
        alert("이 코드는 실행되지 않습니다");
        break;
    default:
        alert("에러");
}

//prompt는 문자열로 반환하여 숫자를 case로 넣으면 작동하지 않음
