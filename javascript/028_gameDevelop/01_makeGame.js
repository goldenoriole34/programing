//도형을 그릴 캔버스 제작
const canvas = document.getElementById("myCanvas");
const context = canvas.getContext('2d');


//위치값 변수지정

//공 관련 변수
const arcRadius = 25;  //공의 원형정도
let arcPosX = canvas.width / 2 + 100; //공을 정가운데 + 100px 오른쪽으로 위치
let arcPosY = canvas.height / 2; //공을 정가운데 위치
let arcMoveDirX = -1; //공의 좌우 변경값
let arcMoveDirY = -1; //공의 높이 변경값
let arcMoveSpeed = 2; //공 이동 속도

let RreturnPoint = canvas.width - arcRadius;
let LreturnPoint = arcRadius;

let ball = { left : 0, right : 0, top : 0, bottom : 0 }

//벽돌 관련 변수
let brick = {
  left : 0, right : 0, top : 0, bottom : 0,
  column : 0, row : 0
}


let bricks = []; //벽돌의 갯수
let brickWidth = 50;  //벽돌 간격 10 * 5개
let brickHeight = 25; //벽돌 간격 5 * 5개
const brickColumn = 5; //가로 (colum)
const brickRow = 4; //세로 열 (row)

//바 관련 변수
let barWidth = 100; //바 길이
let barHeight =  20; //바 굵기
let barPosX = canvas.width / 2 - barWidth / 2;
let barPosY = canvas.height - barHeight;
let batMoveSpeed = 10;

let paddle = { left : 0, right : 0, top : 0, bottom : 0 }


document.addEventListener('keydown', keydownEventHandler)

function keydownEventHandler(e){
  if(e.key == 'ArrowRight'){
    //바를 오른쪽으로 몇 만큼 움직인다
    if( barPosX + barWidth < canvas.width )
    {
      barPosX += batMoveSpeed;
    }
  }
  else if(e.key == 'ArrowLeft'){
    //바를 왼쪽으로 몇 만큼 움직인다
    if(barPosX > 0 )
    {
      barPosX -= batMoveSpeed;
    }
  }
  paddle.left = barPosX;
  paddle.right = barPosX + barWidth;
  paddle.top = barPosY;
  paddle.bottom = barPosY + barHeight;
  // 동그라미가 오른쪽으로 움직이다가 캔버스 끝에 닿으면 왼쪽으로 이동
}


//캔버스 초기화
context.clearRect(0, 0, canvas.width, canvas.height);

function update(){
  //도형의 위치 이동

  if(arcPosX-arcRadius < 0){
    arcMoveDirX = 1;
  } else if(arcPosX > RreturnPoint) {
    arcMoveDirX = -1;
  }
  
  if(arcPosY < LreturnPoint){
    arcMoveDirY = 1;
  } else if (arcPosY > RreturnPoint){
    arcMoveDirY = -1;
  }
  
  arcPosX += arcMoveDirX * arcMoveSpeed;
  arcPosY += arcMoveDirY * arcMoveSpeed;

  ball.left = arcPosX - (arcRadius);
  ball.right = arcPosX + (arcRadius);
  ball.top = arcPosY - (arcRadius);
  ball.bottom = arcPosY + (arcRadius);

  //충돌확인
  if (isCollisionRectToRect(ball, paddle))
  {
    arcPosY = paddle.top - arcRadius;
    arcMoveDirY = -1
  }
}

function isCollisionRectToRect(rectA, rectB) {
  // a의 왼쪽과 b의 오른쪽
  // a의 오른쪽과 b의 왼쪽
  // a의 아래쪽과 b의 위쪽
  // a의 위쪽과 b의 아래쪽
  if(rectA.left > rectB.right ||
     rectA.right < rectB.left ||
     rectA.top > rectB.bottm  ||
     rectA.bottom < rectB.top)
     {
       return false;
     }
  return true;
}

function draw(){
  //화면 기본 초기화
  context.clearRect(0, 0, canvas.width, canvas.height);
  //도형 생성
  drawRect();
  drawAcr();
  drawBricks();
}

//패들 생성
function drawRect() {
  context.beginPath(); //도형시작점
  context.rect(barPosX, barPosY, 100, 20);  //rect = 사각형
  context.fillStyle = 'red';
  context.fill();
  context.closePath(); //도형종결점  
}

//공 생성
function drawAcr() {
  context.beginPath(); //도형시작점
  context.arc(arcPosX, arcPosY, arcRadius, 0, 2 * Math.PI);  //arc = 원형
  context.fillStyle = 'blue';
  context.fill();
  context.closePath(); //도형종결점
}

//벽돌 생성
function setBricks(){
  for(let i = 0 ; i < brickRow ; i++) {  //세로 행 (row)
    bricks[i] = [];
    for(let j = 0 ; j < brickColumn ; j++ ) {  //가로 열 (colum)
      // 'TODO : right, left + 50 해보기
      bricks[i][j] = { //벽돌 위치
        left : 55 + j * ( brickWidth + 10 ),        // ( 왼쪽 첫번째 벽돌들의 왼쪽여백 ) * ( 벽돌갯수 ) + ( 벽돌크기 + 10(벽돌거리) )
        right : 55 + j * ( brickWidth + 10 ) + 50, 
        top : 30 + i * (brickHeight + 5),          //( 위쪽 첫번째 벽돌들의 여백 ) * ( 벽돌갯수 ) + (벽돌크기 + 5(벽돌거리) )
        bottom : 30 + i * (brickHeight + 5) + 25, 
        column : i, row : j
      }
    }
  }
}


//벽돌 그리기
function drawBricks(){
  context.beginPath();
  for(let i = 0 ; i < brickRow ; i++) {  //가로 (colum)
    for(let j = 0 ; j < brickColumn ; j++ ) {  //세로 열 (row)
      context.rect(bricks[i][j].left, bricks[i][j].top, brickWidth, brickHeight);
      context.fillStyle = 'green';
      context.fill();
    }
  }
  context.closePath();
}

setBricks(); //벽돌 생성

//도형을 움직이기 위해 도형의 위치값을 변경하는 함수를 작성한다. //setInterval은 몇초마다 무한반복하는 함수이다.
setInterval(update, 10);
setInterval(draw, 10);