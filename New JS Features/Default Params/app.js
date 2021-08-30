//Parameters are made to take default value when the value is not passed or is undefined
//Below is an example 

const greeting = (name, msg = "Hello!") => msg + " " + name;

console.log(`Calling greeting by passing message ${greeting('Rakshiiii', 'Hi! ')}`);

console.log(`Calling greeting without passing message ${greeting('Rakshiiii',)}`);