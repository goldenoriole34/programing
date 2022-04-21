//함수 생성자

// 벽돌 left, top, right, bottom, col, row, pos + 움직이는 기능


for (let i = 0; i < 20; i++){
  let tempBrick = new Brick(0, 0, 10, 10);
  tempBrick.movingAction();
}

// 옛날방식
// function Brick(left, top, right, bottom) {
//   this.left = left,
//   this.top = top,
//   this.right = right,
//   this.bottom = bottom
// }

// Brick.prototype.movingAction = function() { this.left++; console.log("내가 움직이고 있어") }

class Brick {
  constructor(left, top, right, bottom) {
    this.left = left;
    this.top = top;
    this.right = right;
    this.bottom = bottom;
  }
}

class MovingBrick extends Brick {
  movingAction(){
    this.left++;
  }
}