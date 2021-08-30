//Rest looks similar to spread i.e represented as ...

//*********arguments object*************
// It is an object present in all the function which acts like an array and stores all arguements
// BUt it is not an actual array and cannot perform array methods
//They are not present in arrow functions

console.log("Arguments List demo:");

function sum() {
    console.log(arguments);
}

console.log(`${sum(1, 2, 3)} These are in arguments`);

//We cannnot perform any operation on aarguement list elements

function sumArgs(...num) {//num stores all arguments and ... is rest and  sum can be implemented
    return num.reduce((total, ele) => total + ele);
}


console.log(`${sumArgs(1, 2, 3)}`);


//Rest refers to stroing rest of to arguements . Following is an example

function participants(gold, silver, ...remaining) {
    return console.log(`${gold} won gold, ${silver} won silver,${remaining} participated`);
}

console.log(participants('Rakshith', 'Raj', 'g', 'p'));

