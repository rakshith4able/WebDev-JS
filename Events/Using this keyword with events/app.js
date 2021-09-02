/*Without using 'this' keyword


//changing colors of all all buttons

const buttons = document.querySelectorAll('button');

for (const btn of buttons) {
    btn.addEventListener('click', () => {
        btn.style.backgroundColor = randomColor();
        btn.style.color = randomColor();

    })
}


//changing colors of all all headings

const headings = document.querySelectorAll('h1');

for (const heading of headings) {
    heading.addEventListener('click', () => {
        heading.style.backgroundColor = randomColor();
        heading.style.color = randomColor();

    })
}

*/



function randomColor() {
    const r = parseInt(Math.floor(Math.random() * 255) + 1);
    const g = parseInt(Math.floor(Math.random() * 255) + 1);
    const b = parseInt(Math.floor(Math.random() * 255) + 1);
    const col = `rgb(${r},${g},${b})`;
    return col;

}

//Using 'this' keyword

const buttons = document.querySelectorAll('button');

for (const btn of buttons) {
    btn.addEventListener('click', colorize)
}


//changing colors of all all headings

const headings = document.querySelectorAll('h1');

for (const heading of headings) {
    heading.addEventListener('click', colorize)
}

function colorize() {
    this.style.backgroundColor = randomColor();
    this.style.color = randomColor();

}