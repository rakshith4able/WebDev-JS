//reduce() takes a function with 2 parameters as arguement

// syntax
/*

//1 arguement i.e, function
arr_name.reduce((accumulator, ele){
    return something; // returned value stores to accumulator for next iteration
});

//2 arguements i.e, function and initial accumulator value

arr_name.reduce((accumulator, ele){
    return something; // returned value stores to accumulator for next iteration
},100);// 100 will be initial value of accumulator
*/

console.log("reduce() Example 1: To find sum of elements in aray")
const nums = [0, 1, 2, 3, 4, 5];
const sum = nums.reduce((total, num) => total + num);
console.log(`sum=${sum}`);

console.log("reduce() Example 1: To find min of elements in aray")
const minVal = nums.reduce((min, num) => {
    if (num < min) {
        console.log("hu");
        min = num;
    }

    return min;
});
console.log(`min=${minVal}`);



console.log("reduce() Example 3: To find sum of elements in aray with initial total value 100")
const sumHundred = nums.reduce((total, num) => total + num, total = 100);
console.log(`sum + 100 =${sumHundred}`);
