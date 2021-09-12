//Constructor functions
/*
- Constructor functions are the function which are created using 'new' keyword and this operator in a function
-The constructor function when specified with new keyword itself creates an object and returns the same
*/

//creating make color function

function Color(r, g, b) {
    this.r = r;//this is used to assign the parameters for the current instance
    this.g = g;
    this.b = b;
}

console.log('If we call Color just like makeColor(0,0,255) It doesnt return an object instead returns undefined');
console.log(Color(0, 0, 255));
//'this' without using new keyword refers to window object  

console.log('If we call Color using new key word as new makeColor(0,0,255) It creates object adds values and methods and returns object');
console.log(new Color(0, 0, 255));

//'this' using 'new' keyword refers to the current instance of an object

//Adding methods like rgb() rgba() and hex() to the constuctor function Color
/*If just add inside Color like

this.rgb=function(){return `rgb(${r},${g},${b})`}

it wont be in proto and copies of function is created everytime we create new object

so to add methods into proto we use syntax below:

Color.prototype.rgb=function(){return `rgb(${r},${g},${b})`};

*/


Color.prototype.rgb = function () {
    return `rgb(${r},${g}, ${b})`
};

Color.prototype.rgba = function (a = 1.0) {//a will be 1 by default if value is not specified
    const { r, g, b } = this;
    return `rgba(${r},${g}, ${b},${a})`;
};

Color.prototype.hex = function () {
    const { r, g, b } = this;
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

//Creating two Color objects

const color1 = new Color(255, 255, 255);
const color2 = new Color(255, 200, 100);

console.log('calling all methods on color1');
console.log(color1.rgb());
console.log(color1.rgba());
console.log(color1.hex());

//Checking whether methods on color1 and color2 refers to same method as they are in proto

console.log(color1.rgb === color2.rgb);


//As we can see the constructor function is setting values and the methods are written somewhere else
//They are not grouped together
//So the class concept comes into picture to overcome this issue