const delayedColor = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.querySelector('h1').style.backgroundColor = color;
            resolve();
        }, delay)
    });
}

delayedColor('red', 2000)
    .then(() => { return delayedColor('yellow', 3000) })
    .then(() => { return delayedColor('Blue', 1000) })
