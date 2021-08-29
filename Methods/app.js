//Defining Methods

const myMath = {
    PI: 3.14,
    add: function (x, y) { return (x + y); },
    square: function (x) { return (x * x); }
}

// Accessing PI from myMath

console.log(myMath.PI);

//Accessing add in myMath

console.log(myMath.add(2, 3));

//Acessing add in other way

console.log(myMath["add"](5, 6));

//Shorthand of defining Methods
const myMath = {
    PI: 3.14,
    add(x, y) { return (x + y); },
    square(x) { return (x * x); }
}