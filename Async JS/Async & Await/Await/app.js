/*
- await keyword is used in async functions
- It halts the execution until the promise is resolved
*/

//Example 1 - body color change

const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay);
    })

}

const rainbow = async () => {
    await delayedColorChange('red', 2000);
    await delayedColorChange('orange', 2000);
}

const EndRainBow = async () => {
    await rainbow();
    console.log("End of Rainbow");
}

EndRainBow();

