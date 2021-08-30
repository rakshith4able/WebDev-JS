//filter() takes a callback function as arguement
//filter() calls the function for each element of array and returns list of elements that passed the function

//Remember map() creates array of results of callback function and is different from filter()

console.log("filter() Example 1: filtering Even Nos from list of first 10 Natural nos");

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(nums.filter((num) => (num % 2 == 0)));

console.log("filter() Example 2: filtering top rated movies");


const obj = [
    { movie: 'DDLJ', score: 100 },
    { movie: 'Radhe', score: 50 },
    { movie: 'KGF', score: 100 }];

const topMovies = obj.filter((o) => (o.score == 100));

console.log(topMovies);

console.log("filter() Example 3: using with map()");


mulOfTwoofEven = nums.filter((num) => (num % 2 == 0)).map((n) => (n * 2));

console.log(mulOfTwoofEven);
