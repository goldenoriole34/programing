outer:
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++){
        let input = prompt(`(${i}, ${j})의 값`,"");
        if (!input) break outer;
    }
}

alert("완료!");

//레이블을 사용한다고 해서 원하는 곳으로 마음대로 점프할 수 있는 것은 아닙니다.
//break와 continue는 반복문 안에서만 사용할 수 있고,
//레이블은 반드시 break이나 continue 지시자 위에 있어야 합니다.