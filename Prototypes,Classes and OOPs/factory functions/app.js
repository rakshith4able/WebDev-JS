// Factory function makes us an object , 
// it starts empty,then we add some properties based on arguments provided
// also we add some methods 
// and we return some objects
//Factory functions are one way of making functions based on a pattern or recipie 




//We shall create a factory function that takes r g and b values as input and has methods to return rgb and hex value

const makeColor = (r, g, b) => {
    const color = {}
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function () {
        const { r, g, b } = this;
        return `rgb(${r},${g},${b})`;
    };
    color.hex = function () {
        const { r, g, b } = this;
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    };
    return color;
}

const firstColor = makeColor(255, 255, 255);

console.log(firstColor.rgb());
console.log(firstColor.hex());

//The disadvantage of factory function . For an instance consider the factory function we created

// everytime we make use of factory function it makes creates coolor Object, adds values to it
// creates function each and everytime and they are not reused
// since they are not prototype functions
