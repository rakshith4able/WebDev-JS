// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container');



const baseURL = ' https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';



for (let i = 1; i < 100; i++) {
    const div = document.createElement('div');
    div.classList.add('pokemon');
    const span = document.createElement('span');
    span.append(`#${i}`);
    const img = document.createElement('img');
    img.src = `${baseURL}${i}.png`;
    div.append(img);
    div.append(span);
    container.append(div);
}