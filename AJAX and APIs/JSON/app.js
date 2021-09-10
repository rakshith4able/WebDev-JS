/*
-JSON refers to Javascript object notation
-JSON (JavaScript Object Notation) is a lightweight data-interchange format
-https://www.json.org/json-en.html to know more about json
-The keys in JSON should also be enclosed within double quotes
-It does not support undefined type
-Javascript has methods to convert JSON to JS object and vice versa
-JSON.parse(json_format) -> Converts JSON to JS object
-JSON.stringify(JS_object)-> converts JS object to JSON format
*/


//Converting JSON to JS object

const data = `{"ticker":{"base":"BTC","target":"USD","price":"50302.21217650","volume":"66454.86645274","change":"4.35022380"},"timestamp":1630739321,"success":true,"error":""}`;


const parsedData = JSON.parse(data);


console.log(parsedData);

console.log(parsedData.ticker.price);


//Converting JS object to JSON

const name = { first: 'Rakshith', last: 'Raj' };

const obj = JSON.stringify(name);

console.log(obj);