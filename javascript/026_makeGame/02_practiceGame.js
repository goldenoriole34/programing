const canvas = document.getElementById("myCanvas");
const context = canvas.getContext('2d');

//=========== 변수 영역 ===========

// Paddle 관련 변수
let paddleWidth = 100; //바 길이
let paddleHeight =  20; //바 굵기
let paddlePosX = canvas.width / 2 - paddleWidth / 2; // => canvas를 절반으로 나눠 한 방향으로 몰리지 않게 반넓이 만큼 빼주었다.
let paddlePosY = canvas.height - paddleHeight; // => canvas의 가장 밑부분으로 두고 화면 밖으로 나가지 않게 높이를 빼주었다.

// ball 관련 변수
const ballRadius = 25;  //공의 원형정도
let ballPosX = canvas.width / 2 + 0; //공을 정가운데 + 0px 오른쪽으로 위치
let ballPosY = canvas.height / 2; //공을 정가운데 위치
let ballMoveDirX = -1; //공의 좌우 변경값
let ballMoveDirY = -1; //공의 높이 변경값
let ballMoveSpeed = 2; //공 이동 속도
let lReturnPoint = canvas.width -ballRadius;
let rReturnPoint = ballRadius;

//===============================

// 화면 출력
function draw(){
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawPaddle();
  drawBall();
}

// 패들 생성
function drawPaddle (){
  context.beginPath();
  context.rect(paddlePosX, paddlePosY, paddleWidth, paddleHeight);
  context.fillStyle = 'white';
  context.fill();
  context.closePath();
}

// 공 생성
function drawBall (){
  context.beginPath(); //도형시작점
  context.arc(ballPosX, ballPosY, ballRadius, 0, ( 2 * Math.PI ));  //arc = 원형
  context.fillStyle = 'white';
  context.fill();
  context.closePath(); //도형종결점
}

// 상태변경 체크 (이동)
function update(){

  // 공의 canvas 접촉 시 방향전환 처리
  if(ballPosX - ballRadius < 0)
  {
    ballMovDirX = 1;
  }
  else if(ballPosX + ballRadius > canvas.width)
  {
    ballMovDirX = -1;
  }

  // 공의 canvas 접촉 시 방향전환 처리
  if(ballPosY + ballRadius == canvas.height) {
    console.log('게임중지')
    // gameOver();
  }
  else if(ballPosY - ballRadius < 0)
  {
    ballMovDirY = 1;
  }
  else if(ballPosY + ballRadius > canvas.height)
  {
    ballMovDirY = -1;
  }

  // 공의 이동설정 (속도)
  ballPosX += ballMoveDirX * ballMoveSpeed;
  ballPosY += ballMoveDirY * ballMoveSpeed;

  console.log("x : " + ballPosX + ", y : " + ballPosY);
}

setInterval(draw, 10);
setInterval(update, 10);