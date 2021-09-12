//classes are created using class keyword followed by classname
// class name should shart with uppercase
//inside class we define a constructor with the keyword constructor
//we define functions without using function keyword in class

class Color {
    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    }

    innerRGB() {
        const { r, g, b } = this;
        return `${r},${g},${b}`;
    }

    rgb() {
        return `rgb(${this.innerRGB()})`;
    }

    rgba(a = 1) {
        return `rgba(${this.innerRGB()},${a})`;
    }

    hex() {
        const { r, g, b } = this;
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }


}


const color1 = new Color(255, 255, 255, 'white');

console.log(color1.rgb());
console.log(color1.rgba());
console.log(color1.hex());