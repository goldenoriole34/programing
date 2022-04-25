//페이지 리로딩
var interval = setInterval( () => ( update ), 10);

//canvas 관련 변수
const canvas = document.getElementById('gameFiled'); 
const context = canvas.getContext('2d');

//gmaeFiled 관련 변수
const filedTileWidth = 60;
const filedTileHeight = 60;
let tiles;

// goal 관련 변수
const goalWidth = 60;
const goalHeight = 60;
const halfGoalWidth = goalWidth / 2; //player 절반넓이
const halfGoalHeight = goalHeight / 2; //player 절반높이
let goalX = (canvas.width/ 2) - halfGoalWidth; //가로 가운데
let goalY = (canvas.height / 2) - halfGoalHeight; //세로 가운데

// player 관련 변수
let player = { left : 0, right : 0, top : 0, bottom : 0 }
const playerWidth = 60;
const playerHeight = 60;
const halfPlayerWidth = playerWidth / 2; //player 절반넓이
const halfPlayerHeight = playerHeight / 2; //player 절반높이
let playerX = 0; //맨 왼쪽
let playerY = canvas.height-playerHeight; //맨 아래
// let playerX = (canvas.width / 2) - halfPlayerWidth; //가로 가운데
// let playerY = (canvas.height / 2) - halfPlayerHeight; //세로 가운데
const playerMoveSpeed = playerWidth /2;


// monster 관련 변수
let randomMonster;
let monsterNum = 10;

// 생성 객체 그리는 함수
function draw(){
  context.clearRect(0,0,canvas.width,canvas.height) //게임필드 초기화
  drawGameFiled(); //게임필드
  goalRect(); //게임 끝
  playerRect(); //게임 플레이어
}

class Tile { //명사
  constructor(left, top, right, bottom, color, number) { //속성종류
    this.left = left; //속성1
    this.top = top; //속성2
    this.right = right; //속성3
    this.bottom = bottom; //속성4
    this.color = color; //속성5
    this.number = number; //속성6
  }

  //class 내 그리기 함수
  draw() {
    context.rect(this.left, this.top, filedTileWidth, filedTileHeight); 
    context.fillStyle = this.color;
    context.fill();
  }
}

function setmonsterTile() {
  randomMonster = Math.floor(Math.random() * 100)
  if(randomMonster == monsterNum) {
    return '#570200'
  } else {
    return "#826565"
  }
}

function setGameFiled(){
  tiles = [];
  for ( let i = 0; i <= 10; i++) {   // 10 x 10 줄
    tiles[i]=[];
    for (let j = 0; j <= 10; j++) {
      tiles[i][j] = new Tile ( i*60 , j*60 , i*60 , j*60 , setmonsterTile(), randomMonster )
    }
  }
}
setGameFiled()

//tile 그리기
function drawGameFiled()
{
  for(let i = 0; i < 10; i++) //위에서 부터 n줄
  {
    for(let j = 0; j < 10; j++) // 가로로 n개
    {
      context.beginPath();
      tiles[i][j].draw();
      context.closePath(); // 밖에써서 색상 변경은 x 하려면 for문안에
      console.log(tiles);
    }
  }

}

// player 생성
function playerRect(){
  context.beginPath();
  context.rect(playerX,playerY,playerWidth,playerHeight);
  context.fillStyle = "yellow";
  context.fill(); 
  context.closePath();
}

// player 키보드 이동 컨트롤 기능
document.addEventListener('keydown', keyDownEventHandler);

// player 키보드 이동 컨트롤 기능함수
function keyDownEventHandler(e) {
  if( e.key == 'ArrowRight' ) {
    if(playerX + playerWidth < canvas.width){
      playerX += playerMoveSpeed;
    }
  }
  else if(e.key == "ArrowLeft") {
    if(playerX > 0 ) { 
      playerX -= playerMoveSpeed;
    }
  }
  else if(e.key == "ArrowDown") {
    if(playerY + playerHeight < canvas.height) {
      playerY += playerMoveSpeed;
    }
  }
  else if(e.key == "ArrowUp") {
    if(playerY > 0) {
      playerY -= playerMoveSpeed;
    }
  }

  player.left = playerX;
  player.right = playerX + playerWidth;
  player.top = playerY;
  player.bottom = playerY + playerHeight;
}

// 게임 Goal 생성
function goalRect(){
  context.beginPath();
  context.rect(goalX,goalY,goalWidth,goalHeight);
  context.fillStyle = "gold";
  context.fill(); 
  context.closePath();
}

function gameClear(){
  setTimeout( ()=> {
    window.location.reload(),
    alert("게임 클리어!")
  },10)
}

function gameOver(){
  clearInterval(interval)
  // window.location.reload()
  alert("게임 오버!")
}

//동작 감지
function update(){

  if(playerX == goalX && playerY == goalY) {
    gameClear()
    setTimeout( ()=> {
      playerX = 0,
      playerY = canvas.height-playerHeight
    },2000)

  }
  


}

// 생성 객체 그리는 함수 실행
draw();

setInterval(update, 10);
setInterval(draw, 10);