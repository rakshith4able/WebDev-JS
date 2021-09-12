//extends keyword is used to inherit parent class
//super keyword is used in child class constructor to maker use of parent constructor

class Pet {
    constructor(name, age) {
        console.log("In parent constructor!");
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log('method is parent');
        return `${this.name} is eating food`;
    }
}

class Cat extends Pet {
    constructor(name, age, livesCount)//This is to demonstrate the used of super keyword to make use of constructor of parent
    {
        console.log('In Cat constructor');
        super(name, age);//Controld goes to super constructor
        this.livesCount = livesCount;
    }
    meow() {
        return `MEOW!!`;
    }
}

class Dog extends Pet {
    //This below eat method gets called when we call eat with Dog object not the one in Pet class
    eat() {
        console.log('this is eat method in Dog');
        return `${this.name} is not eating`;
    }
    bark() {

        return `MEOW!!`;
    }
}


console.log("Call to eat method using child Cat results in using parent method");
const chotu = new Cat('chotu', 2, 5);
console.log(chotu.eat());

console.log("Call to same methods in parent and child results in using child method");
const blacky = new Dog('blacky', 5);
console.log(blacky.eat());

console.log(chotu);
console.log(blacky);

