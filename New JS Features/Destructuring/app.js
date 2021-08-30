//Destructuring  refers to unpacking value from array, properties from objects

//Destructuring an array
console.log('Destructuring Array');

const scores = [100, 99, 88, 56, 22, 10];

//Traditional way
let first = scores[0];
let second = scores[1];


//using destructuring
const [gold, silver, bronze, ...everyoneElse] = scores;

console.log(`Gold:${gold},Silver:${silver},Bronze:${bronze},${everyoneElse}`);


//Destructuring Objects
console.log('Destructuring Object');

const user = {
    name: 'Suresh',
    birth: 1999,
    died: 2020,
}

const user1 = {
    name: 'Ramu',
    birth: 1999
}

const { name, birth } = user;// key values should be given in {} of LHS. If key values is not given then it will be valued undefined

const { died: death } = user;// : can be used to rename the key to other name

const { deathUserOne = 'N / A' } = user1;// We can initialize default value to properties usin =

console.log(name, death, deathUserOne);


//Destructuring Parameters
console.log("Destructuring parameters");

const userDetails = {
    firstName: 'Rakshith',
    lastName: 'Raj',
    age: 22,
    sex: 'male'
}

function fullName(userDetails) {
    console.log("Conventional way:")
    console.log(userDetails.firstName + userDetails.lastName);
}
console.log(fullName(userDetails));

function fullNameDestructuring({ firstName, lastName }) {// using destructuring parameters
    console.log("Using Destructuring parameters:")
    console.log(firstName + lastName);
}
console.log(fullNameDestructuring(userDetails));

// Destructuring can also be used to map and filter






