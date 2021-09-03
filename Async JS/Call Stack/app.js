const multiply = num => num * num;

const square = num => multiply(num);

const isRightTriangle = (a, b, c) => square(c) === square(a) + square(b);

console.log(isRightTriangle(3, 4, 5));

/*
- Call stack is the approach used by JS interpreter
- when there is more function calls in a a script
- to keep track of its position
- It can be visualized by setting breakpoint
- by clicking line no. of funciton that calls another functions
- in chrome debugger(sources tab)
*/



