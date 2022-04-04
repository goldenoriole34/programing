for(let i = 0; i < 10; i++) {

    //조건이 참이라면 남은 본문은 실행 안됨
    if( i % 2 == 0 ) continue;  //짝수인 경우 continue를 만나 넘어감
    
    alert(i);

}


//홀수출력 다른 예
for (let i = 0; i < 10; i++) {
    if( i % 2) {
        alert(i);
    } 
}