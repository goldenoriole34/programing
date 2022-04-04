let sum = 0;
while (true) {
    let value = +prompt("숫자를 입력하세요");  //+ 기호는 형식을 숫자로 바꿔줌
    if (!value) break;
    sum += value;
}
alert("합계 : " + sum);