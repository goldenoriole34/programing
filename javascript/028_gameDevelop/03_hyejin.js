const canvas = document.getElementById('myCanvas'); 
const context = canvas.getContext('2d');

// 벽돌 관련
const brickWidth = 50 // 가로벽돌 간격 10
const brickHeight = 25; // 세로 벽돌 간격 5
const brickColumn = 5; //밑에 먼저 숫자쓰고 그 다음 상수로 지정한다음 밑에 바꿨음.
const brickRow = 5 ; // 4행 세로로 
let bricks = []
let countAliveBrick = brickColumn * brickRow; //남아있는 벽돌의 갯수
let inputBrick;


// 볼 관련
let outBoundR = canvas.width / 2 + 50
let outBoundL = canvas.width / 2 - 50

const arcRadius = 20;
let arcPosX = canvas.width / 2 + 100;  // 공 날아가는 방향
let arcPosY = canvas.height / 2;
let arcMovDirX = -1;
let arcMovDirY = -1;
let arcMovSpeed = 2.5;

let ball = { 
  left:0, right:0, top:0, bottom:0,
};

// 하나의 형태를 이렇게 할거라고 작성한 것.
// let brick = {
//   left:0, right:0, top:0, bottom:0,
//   column:0, row:0,
// }

// 패들 관련
const barWidth = 100;
const barHeight = 20
let barPosX = canvas.width / 2 - barWidth / 2;
let barPosY = canvas.height - barHeight;
let barMovSpeed = 10;

let paddle = {
  left:0, right:0, top:0, bottom:0,
}


// 키처리 함수 추가
document.addEventListener('keydown', keyDownEventHandler);


// 패들 좌우 컨트롤
function keyDownEventHandler(e)
{
  if (e.key == 'ArrowRight')
  {
    if(barPosX + barWidth < canvas.width)
    {
      barPosX += barMovSpeed;

    }
  }
  else if (e.key == 'ArrowLeft')
  {
    if(barPosX > 0)
    {
      barPosX -= barMovSpeed;
    }
  }

  paddle.left = barPosX;
  paddle.right = barPosX + barWidth;
  paddle.top = barPosY;
  paddle.bottom = barPosY + barHeight;
}

//도형 움직임
function update()
{
  if(arcPosX - arcRadius < 0)
  {
    arcMovDirX = 1;
  }
  else if(arcPosX + arcRadius > canvas.width)
  {
    arcMovDirX = -1;
  }

  if(arcPosY + arcRadius == canvas.height) {
    console.log('게임중지')
    gameOver();
  }
  else if(arcPosY - arcRadius < 0)
  {
    arcMovDirY = 1;
  }
  else if(arcPosY + arcRadius > canvas.height)
  {
    arcMovDirY = -1;
  }
  arcPosX += arcMovDirX * arcMovSpeed;
  arcPosY += arcMovDirY * arcMovSpeed;

  ball.left = arcPosX - arcRadius;
  ball.right = arcPosX + arcRadius;
  ball.top = arcPosY - arcRadius;
  ball.bottom = arcPosY + arcRadius;

  if (isCollisionRectToRect(ball, paddle))
  {
    arcMovDirY = -1;
    arcPosY = paddle.top - arcRadius;
  }

  // 볼과 벽돌 충돌
  for(let i = 0; i < brickRow; i++)
  {
    for(let j = 0; j < brickColumn; j++)
    {
      if(bricks[i][j].isAlive && isCollisionRectToRect(ball, bricks[i][j]))  //살아있는 벽돌만 표시함
      {
        // console.log("i : ", i, "j : ", j); // 충돌 확인
        bricks[i][j].isAlive = false;  //충돌하면 사라짐
        countAliveBrick -= 1;
        console.log('남아있는 벽돌 갯수 : ' + countAliveBrick);
        
        if( countAliveBrick == 0 ) {
          gameClear();
        }

        arcMovDirY = -arcMovDirY;
        arcMovDirX = -arcMovDirX;
      }
    }
  }
}

function isCollisionRectToRect(rectA, rectB)
{

  if(rectA.left > rectB.right ||
      rectA.right < rectB.left ||
      rectA.top > rectB.bottom ||
      rectA.bottom < rectB.top) 
    {
      return false;
    }
  return true;
}

function draw()
{
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawCanvas();

  drawRect();
  drawArc();
  drawBricks();
}

function drawCanvas()
{
  context.beginPath();
  context.rect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "rgba(10, 10, 10, 0.1)";
  context.fill();
  context.closePath();
}

function drawArc() 
{ 
  context.beginPath(); 

  context.arc(arcPosX, arcPosY, arcRadius, 0, 2 * Math.PI); 

  context.fillStyle = 'blue'; 
  context.fill(); 

  context.closePath(); 
}

function drawRect()
{
  context.beginPath(); 

  context.rect(barPosX, barPosY, barWidth, barHeight); 
  
  context.fillStyle = 'red'; 
  context.fill(); 
  
  context.closePath(); 
}

function setBricks()
{
  for(let i = 0; i < brickRow; i++) //위에서 부터 4줄
  {
    bricks[i] = [];
    for(let j = 0; j < brickColumn; j++) // 가로로 5개
    {
      bricks[i][j] = {
        left:55 + j * (brickWidth + 10),
        right:55 + j * (brickWidth + 10) + brickWidth,
        top:30 + i * (brickHeight + 5),
        bottom:30 + i * (brickHeight + 5) + brickHeight, //30 주는게 블럭이랑 간격크기 포함?
        column:i, row:j,
        isAlive:true
      };
    }
  }
}

function drawBricks()
{
  context.beginPath();
  for(let i = 0; i < brickRow; i++) //위에서 부터 4줄
  {
    for(let j = 0; j < brickColumn; j++) // 가로로 5개
    {
      if(bricks[i][j].isAlive)
      {
        context.rect(bricks[i][j].left, bricks[i][j].top, brickWidth, brickHeight); 
        context.fillStyle = 'green';
        context.fill();
      }
    }
  }
  context.closePath(); // 밖에써서 색상 변경은 x 하려면 for문안에
}

function gameStart(){
  inputBrick = prompt("벽돌 갯수를 5개 단위로 입력하세요 ", "25")
}

function gameClear(){
  clearInterval(interval)
  alert("게임 클리어!")
}

function gameOver(){
  clearInterval(interval)
  alert("게임 오버!")
}

gameStart()
setBricks();
var interval = setInterval(update, 10);
setInterval(draw, 10);


