function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
};


//(1) 함수 모두 지정 후 ask()에서 콜백으로 호출
function showOk() {
  alert("동의하셨습니다");
}

function showCancel() {
  alert("취소 버튼을 누르셨습니다.");
}

ask ("동의하십니까?", showOk, showCancel);


//(2) ask()호출하면서 익명함수로 선언하여 바로 호출
ask (
  "동의하십니까?",
  function(){ alert("동의하셨습니다");},
  function(){ alert("취소 버튼을 누르셨습니다");}
);

