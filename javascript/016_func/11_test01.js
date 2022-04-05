// '?'나 "||"를 사용하여 함수 다시 작성하기

function checkAge(age) {
    age > 18 ? true : confirm("보호자의 동의를 받으셨나요?")
}

function checkAge(age) {
    retrun (age > 18) || confirm("보호자의 동의를 받으셨나요?")
}