//매개변수가 두개여도 하나만 호출해도 된다 다만 undefined가 나오기 때문에 기본값을 넣어주었다.

function showMessage(from, text = "no text given") {
    alert( from + ": " + text );
}
  
showMessage("Ann"); // Ann: no text given


// function showMessage (from, text = anotherFunction()) {
  // anotherFunction()은 text값이 없을 때만 호출됨
  // anotherFunction()의 반환 값이 text의 값이 됨
// }