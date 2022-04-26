//페이지 리로딩
var interval = setInterval( () => ( update ), 10);

//canvas 관련 변수
const canvas = document.getElementById('gameFiled'); 
const context = canvas.getContext('2d');

//gmaeFiled 관련 변수
const filedTileWidth = 60;
const filedTileHeight = 60;
let tiles;

//tiles 관련 변수
let normalColor = "#826565";
let monsterColor = '#570200';
let monsterX;
let monsterY;

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
const hpSpan = document.getElementById('hp');
const cashSpan = document.getElementById('cash');


// monster 관련 변수
let randomMonster;
let monsterNum = 10;
let monster;

// battle 관련 변수
let battleResult;
let battleNumber;
var inputNumber;
let battleCoverage;

// ====================================================================================

// 생성헤둔 객체 그리는 함수
function draw(){
  context.clearRect(0,0,canvas.width,canvas.height) //게임필드 초기화
  drawGameFiled(); //게임필드
  goalRect(); //게임 끝
  playerRect(); //게임 플레이어
}

class Tile { //명사
  constructor(left, top, right, bottom, color, number, isMonster) { //속성종류
    this.left = left; //속성1
    this.top = top; //속성2
    this.right = right; //속성3
    this.bottom = bottom; //속성4
    this.color = color; //속성5
    this.number = number; //속성6
    this.isMonster = isMonster; //속성7
  }

  //class 내 그리기 함수
  draw() {
    context.rect(this.left, this.top, filedTileWidth, filedTileHeight); 
    context.fillStyle = this.color;
    context.fill();
  }
}

class Player {
  constructor(hp, cash){
    this.hp = hp;
    this.cash = cash;
  }
}

// 타일 종류별 색상지정
function tileColor() {
  randomMonster = Math.floor(Math.random() * 100)
  if(randomMonster < monsterNum) {
    return monsterColor //몬스터 타일
  } else {
    return normalColor //일반 타일
  }
}

// tile 배열 생성
function setGameFiled(){
  tiles = [];
  for ( let i = 0; i <= 10; i++ ) {   // 10 x 10 줄
    tiles[i]=[];
    for (let j = 0; j <= 10; j++) {
      tiles[i][j] = new Tile ( i*60 , j*60 , i*60 , j*60 , tileColor(), randomMonster, false )
        if(randomMonster < monsterNum) {
          monsterX = tiles[i][j].left
          monsterY = tiles[i][j].top
          console.log("monsterX : " + monsterX + ", monsterY : " + monsterY);
          tiles[i][j].isMonster = true;
        }
    }
  }
}
setGameFiled()
playerState = new Player (100, 0)

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
      // console.log(tiles);
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
      console.log('x : '+playerX + ', Y : '+ playerY);
    }
  }
  else if(e.key == "ArrowLeft") {
    if(playerX > 0 ) { 
      playerX -= playerMoveSpeed;
      console.log('x : '+playerX + ', Y : '+ playerY);

    }
  }
  else if(e.key == "ArrowDown") {
    if(playerY + playerHeight < canvas.height) {
      playerY += playerMoveSpeed;
      console.log('x : '+playerX + ', Y : '+ playerY);

    }
  }
  else if(e.key == "ArrowUp") {
    if(playerY > 0) {
      playerY -= playerMoveSpeed;
      console.log('x : '+playerX + ', Y : '+ playerY);
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

//배틀 : 가위바위보 게임 알고리즘
// ((나 - 상대) + 2) % 3                            —— 0 -> 승리 / 1 -> 패배 / 2 -> 무승부
function battle_RockPaperScissors(inputNumber){
  battleNumber = Math.floor((Math.random() * 10)) % 3
  battleCoverage = Math.floor(Math.random()*100)

  if(((inputNumber - battleNumber)+2)%3 == 0){
    alert("승리하였습니다")
    disapebattleButtonDisapear();
    playerState.cash += battleCoverage;
    cashSpan.innerText = `cash : ${playerState.cash}`;
    alert(battleCoverage + "의 캐쉬를 획득하였습니다!")
  }
  else if(((inputNumber - battleNumber)+2)%3 == 1){
    alert("패배하였습니다")
    disapebattleButtonDisapear();
    playerState.hp -= 1;
    console.log(playerState.hp)
    hpSpan.innerText = `hp : ${playerState.hp}`;
    alert(playerState.hp + "의 hp가 남았습니다.")
  }
  else {alert("무승부입니다"), disapebattleButtonDisapear()
  }
}

//배틀 : 버튼 디폴트 값
document.getElementById("battleButton").style.display = "none";

// 배틀 : 가위바위보 버튼 숨기기
function disapebattleButtonDisapear(){
  document.getElementById("battleButton").style.display = "none";
}

// 배틀 : 가위바위보 버튼 나타내기
function battleButtonApear(){
  document.getElementById("battleButton").style.display = "block";
  alert('몬스터를 만났습니다! 가위바위보 배틀을 시작합니다')
}

//동작 감지
function update(){

  //player가 goal에 무사히 도착했을 때, 게임 클리어
  if(playerX == goalX && playerY == goalY) {
    gameClear()
    setTimeout( ()=> {
      playerX = 0,
      playerY = canvas.height-playerHeight
    },2000)
  }
  
  //player가 monster를 만났을 때, 가위바위보 버튼 생성
  for ( let i = 0; i <= 10; i++) {   // 10 x 10 줄
    for (let j = 0; j <= 10; j++) {
        if(playerX == tiles[i][j].left && playerY == tiles[i][j].top && tiles[i][j].isMonster == true) {
          setTimeout( ()=> {
            playerY -= 30
          },1)
          battleButtonApear()
        }
    }
  }
}

// 생성 객체 그리는 함수 실행
draw();

setInterval(update, 10);
setInterval(draw, 10);