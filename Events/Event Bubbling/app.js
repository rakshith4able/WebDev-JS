const parent = document.querySelector('#parent');
const child = document.querySelector('#child');

parent.addEventListener('click', () => {
    console.log("HAHAHA");
    parent.classList.toggle('hide');
})

child.addEventListener('click', function (e) {
    parent.style.backgroundColor = randomColor();
    //to stop event bubbling we use following
    e.stopPropagation();//To stop event bubbling
})


function randomColor() {
    const r = parseInt(Math.floor(Math.random() * 255) + 1);
    const g = parseInt(Math.floor(Math.random() * 255) + 1);
    const b = parseInt(Math.floor(Math.random() * 255) + 1);
    const col = `rgb(${r},${g},${b})`;
    return col;

}