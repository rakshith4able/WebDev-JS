//Spread i.e 3 dots ... is used for various applications

//Spread in function call


console.log("************Spread in function call***************");
console.log("Example 1:");

const nums = [1, 2, 3, 4, 5];

console.log(Math.min(1, 2, 3, 4, 5));//outputs 1

console.log(Math.min(nums));//outputs NAN because the array is passed as arguement. The array can be expanded using spread as below

console.log(Math.min(...nums));//outputs 1


console.log("Example 2:");

console.log('h', 'e', 'l', 'l', 'o');

console.log(...'hello');//results same output as above

console.log(nums);

console.log(...nums);


console.log("*************Spread in array literals****************");

//spread can be used to copy an array or combination of arrays to a new array

const abc = ['a', 'b', 'c'];

const def = ['d', 'e', 'f'];

const all = [...abc, ...def];
console.log(all);

//spread can also used to expand string as an array

console.log([...'Hello']);


//spread can also be used to copy objects to another 

console.log("*************Spread in objects****************");

const feline = { legs: 4, family: 'felidae' };
const canine = { isFurry: true, family: 'Caninae' };

const dogCat = { ...canine, ...feline };
console.log(dogCat); // since feline comes last family will be felidae

console.log({ ...canine, ...feline, family: 'raj' });//family will be raj

console.log({ ..."Hello" }); // keys will be 0,1,2,3...

console.log({ ...[1, 2, 3, 4, 5] }); // keys will be 0,1,2,3...












