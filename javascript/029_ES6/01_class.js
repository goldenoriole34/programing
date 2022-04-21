class developer { 
  constructor(name, age){
    this.name = name;
    this.age = age;

  }

  hello(){
    return "hi " + this.name + ", your age : " + this.age
  }
}

let test = new developer("hyein", "33");
console.log(test.hello());

class develper2 extends developer{

  game(){
    return "hi, "+ this.name +" this is game";
  }

}

let test2 = new develper2("sieun");
console.log(test2.game());

