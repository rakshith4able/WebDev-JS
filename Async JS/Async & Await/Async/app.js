/*
-async keyword is used prior to function keyword or prior to () in case of arrow functions

-when function is assigned with awake keyword the function returns a promise

- If function  returns any value it gets resolved

- If function results in an error it gets rejected

- We can use then() and catch() to handle data from promise

*/

//Example 1 - resolving with value
async function example1() {
    return 'Lalala';
}

example1()
    .then((data) => { console.log("Resolved with values", data) })
    .catch((data) => { console.log("Rejected with", data) });



//Example 2 - rejecting with error and using async with arrow function
const example2 = async () => {
    throw new Error("lol I am an error!");
    return 'Lalala';
}

example2()
    .then((data) => { console.log("Resolved with values", data) })
    .catch((data) => { console.log("Rejected with", data) });

//Example 3

const login = async (username, password) => {
    if (!username || !password) throw "Missing Credentials";
    if (password == "mypassword")
        return "Welcome";
    throw "Invalid Credentials";
}

login("abc", "mypassword")
    .then((message) => { console.log(message) })
    .catch((err) => { console.log(err) });



