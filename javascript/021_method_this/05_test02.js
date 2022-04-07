//make calculator

let calculator = {
  sum() { return this.num1 + this.num2 },
  mul() { return this.num1 * this.num2 },

  read() {
    this.num1 =+ prompt("첫번째 값", 0)
    this.num2 =+ prompt("두번째 값", 0)
}
};


calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );


