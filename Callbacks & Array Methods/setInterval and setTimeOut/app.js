//setTimeout() and setInterval() methods. 



//setTimeOut() is used to cause some action with delay of specified milliseconds
//setTimeOut() takes two arguements 
//first is function
//second is delay in milliseconds
//setTimeOut() executes only once
console.log("'Before' Appears Immediately");
setTimeout(() => {
    console.log("Hello")
}, 3000);
console.log("'After' Appears Immediately");

//setInterval() is somewhat similar to setTimeOut() 
//But it calls the callback function again and again based on sepecifed milliseconds
//To stop that execution loop we have to use clearInterval(ID_containing_setInterval());

const id = setInterval(() => {
    console.log(Math.random());
}, 2000);

clearInterval(id);//To stop setInterval() execution