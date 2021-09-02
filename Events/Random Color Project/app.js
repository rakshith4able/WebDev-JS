
const h1 = document.querySelector('h1');
const btn = document.querySelector('button');


function random() {
    const r = parseInt(Math.floor(Math.random() * 255) + 1);
    const g = parseInt(Math.floor(Math.random() * 255) + 1);
    const b = parseInt(Math.floor(Math.random() * 255) + 1);
    const col = `rgb(${r},${g},${b})`;
    document.body.style.backgroundColor = col;
    h1.innerText = col;

}

btn.addEventListener('click', random);