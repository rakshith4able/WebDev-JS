//Making XML request 
//Does not support promises
//Older way of requesting in JS
//Syntax is not easy to remember
const req = new XMLHttpRequest();

req.onload = function () {
    console.log("ALL DONE WITH REQUEST");
    console.log(this);
    const data = JSON.parse(this.responseText);
    console.log(data.ticker.price);
}

req.onerror = function () {
    console.log("Error!");
    console.log(this);
}

req.open('GET', 'https://api.cryptonator.com/api/ticker/btc-usd');

req.send();

