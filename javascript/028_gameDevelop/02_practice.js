//01_makeGame.js 파일

//캔버스 정의
const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');

//Canvas 생성
function drawCanvas()
{
  context.beginPath();
  context.rect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "black";
  context.fill();
  context.closePath();
}

drawCanvas()