function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "동의하십니까?",
    function() { alert("동의하셨습니다."); },
    function() { alert("취소 버튼을 누르셨습니다."); }
  );


  //위 함수를 화살표 함수로 바꾸기

  
  const ask = (question, yes, no) => {
      iconfirm(question) ? yes : no
  }

  ask("동의하십니까?", () => alert("동의하셨습니다"), alert("취소 버튼을 누르셨습니다"))