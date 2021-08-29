//Higher oeder functions 1. Takes function as arguement or 2. Returns functions


let input = prompt("'1'-Taking Function as arguement '2'- Returning function");
//1.Taking function as arguement
if (input == 1) {

    function callTwice(fun) {
        fun();
        fun();
    }

    function rollDie() {
        console.log(Math.floor(Math.random() * 6) + 1);
    }

    callTwice(rollDie);
}

//2.Returning function
else if (input == 2) {


    function makeBetween(min, max) {
        return function (num) {
            return num >= min && num <= max;
        }
    }

    const isBet = makeBetween(10, 20);

    console.log(isBet(12));


}