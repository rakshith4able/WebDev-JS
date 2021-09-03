/* 
- Java Script is single threaded
- That means in any given time java script can do only one task
- In other words in any given time javascript can execute atmost one line of code
- Then How does the following example work?
*/

console.log("I am Start");
setTimeout(() => console.log("I came after 3 secs", 3000));
console.log("I am End");

/*
-Since js is single threader it should have paused in the second line at timeOut function
 but it did not. and Executed next statements
- This is becoz the setTimeOut() and some other requests are handled by browsers using webAPIs written in
 different language
- JS passes such requests  to browser to handle using call stack.
- whenever the value returns in call stack the JS executes the line
- This Can be visualized in website called loupe
*/
