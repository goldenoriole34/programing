let id = prompt("로그인 ID를 입력하세요", "");

if (id == "Admin") {
    let password = prompt("로그인 PW를 입력하세요", "")

    if (password == "TheMaster") {
        alert("환영합니다!");
    } else if(password !== "TheMaster") {
        alert("인증에 실패하였습니다");
    } else {
        alert("취소되었습니다");
    };
} else {
    alert("취소되었습니다.")
}