class developer { 

  constructor(name){
    this.name = name
  }

  hello(){
    return "hi" + this.name + "!"
  }
}

let test = new developer("hyein");
console.log(test.hello());

class develper2 extends developer{

  game(){
    return "hi, this is game";
  }

}

let test2 = new develper2("hyejin");
console.log(test2.game());

