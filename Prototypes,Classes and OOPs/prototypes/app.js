//Prototypes are nothing but template objects, they contain bunch of methods and we can create multiple objects
//that share same prototype so they have acces to same methods wihthout having to have their own copy
console.dir([]);
console.log(Array.prototype);//Shows the prototype with all those methods
console.log(String.prototype);//Shows the prototype with all those methods

//adding our own methods to proptypes

String.prototype.yell = function () { return `OMG!! ${this.toUpperCase()} AGGHH! ` }; //adding own method to string prototype

console.log("Calling yell : with string hahaha")

console.log('hahahah'.yell());

//Adding our own method to array prototype

Array.prototype.custom_pop = () => { return "Sorry I wont pop this. I am not your servant!" }

console.log('Calling custom_pop() with array [1,2,3]');

console.log([1, 2, 3].custom_pop());

