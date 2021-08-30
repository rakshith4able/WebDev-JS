//map() it requires callback funstion as arguement. map() calls the callback function for each element of an array and stores results 
//of each iteration to seperate new array 
//Array Example
console.log("Array using map method");
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const multiplesOfTwo = array.map(function (element) {
    return element * 2;
});

for (ele of multiplesOfTwo) {
    console.log(ele);
}



//Array of objects example
console.log("Array of Objects using map  method");

const obj = [
    { movie: 'DDLJ', score: 100 },
    { movie: 'Radhe', score: 50 },
    { movie: 'KGF', score: 100 }];


const titles = obj.map(function (ele) {
    return ele.movie;
});

for (ele of titles) {
    console.log(ele);
}