//some() and every()

//both methods returns boolean

//both take a call back function as arguement

//some() returns true if any of the array element satisfies the function

//every() returns true if all of the array element satisfies the function

console.log("some() example");

const nums = [1, 2, 3, 4, 5];

console.log(nums.some(num => num == 4));

console.log("every() example");

console.log(nums.every(num => num == num));

