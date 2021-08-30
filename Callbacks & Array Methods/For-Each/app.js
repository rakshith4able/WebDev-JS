//forEach() it requires callback funstion as arguement. forEach() calls the callback function for each element of an array 
//Array Example
console.log("Array using forEach method");
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

array.forEach(function (element) {
    if (element % 2 == 0)
        console.log(element);
});

//Array of objects example
console.log("Array of Objects using forEach method");

const obj = [
    { movie: 'DDLJ', score: 100 },
    { movie: 'Radhe', score: 50 },
    { movie: 'KGF', score: 100 }];

obj.forEach(function (ele) {
    console.log(`${ele.movie} - ${ele.score} / 100`);
});