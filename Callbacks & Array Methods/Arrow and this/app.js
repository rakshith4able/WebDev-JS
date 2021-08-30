//Arrow functions ()=>{}  behaves differently with'this' key word. sometimes its of advantage and sometimes isn't

console.log("Example 1: Arrow function always refers to Window object")

const person = {
    firstName: "Rakshith",
    lastName: "Raj",
    fullName: function () {
        return (this.firstName + " " + this.lastName);
    },
    shoutName: function () {
        setTimeout(function () {
            console.log(this.fullName());
        }, 2000);
    },
    shoutNameArrow: function () {
        setTimeout(() => console.log(this.fullName())
            , 4000);
    },
};

const personArrow = {
    firstName: "Rakshith",
    lastName: "Raj",
    fullName: () => this.firstName + " " + this.lastName
};

console.log(`Output without using arrow function: ${person.fullName()} `)

console.log(`Output using arrow function: ${personArrow.fullName()} `) // this results in undefined becoz Arrow func refers to Window object

console.log("Example 2: Arrow function always refers to Window object as advantage");


console.log(`Output of setTimeOut without using arrow function: ${person.shoutName()} `)

console.log(`Output of setTimeOut using arrow function: ${person.shoutNameArrow()} `)




