/*
-If async function with await is not resolved and rejected 
 then we can collect and resolve error using try catch block

*/
const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

const makeTwoRequests = async () => {
    try {
        let data1 = await fakeRequest('/page1');
        console.log(data1);

        let data2 = await fakeRequest('/page2');
        console.log(data2);
    }
    catch (e) {
        console.log("Caught Error!");
        console.log("Error is", e);

    }
}

console.log(makeTwoRequests());