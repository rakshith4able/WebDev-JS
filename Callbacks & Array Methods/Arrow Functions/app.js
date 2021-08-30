//Arrow functions are another way of defining function without using keywords.

//2 arguements normal declaration
const add = function (x, y) {
    return (x + y);
}

//2 arguements using arrow function
const addition = (x, y) => {
    return (x + y);
}

// 1 arguement
const square = (num) => { // can write single parameter without paranthesis
    return num * num;
}

//no arguement

const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1;
}

//Implicit Returns i.e return keyword is not used  but  statement is placed in () without {} . 
const rollDieImp = () => (
    Math.floor(Math.random() * 6) + 1);



//Using Arrow functions in map()
console.log("Array of Objects using map  method");

const obj = [
    { movie: 'DDLJ', score: 100 },
    { movie: 'Radhe', score: 50 },
    { movie: 'KGF', score: 100 }];


const titles = obj.map((ele) => (ele.movie)); //arrow function



//Implicit Return  If in case statement can be used on the same line doesnt require ()
const isEven = num => num % 2 == 0;

console.log("Calling addition of 1 and  2");
console.log(addition(1, 2));

console.log("Calling square of 2");
console.log(square(2));

console.log("Calling roll die");
console.log(rollDieImp());

console.log("Calling isEven of 6");
console.log(isEven(6));

console.log("Arrow function in map()");
for (ele of titles) {
    console.log(ele);
}
