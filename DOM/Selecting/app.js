/* const allImages = document.getElementsByTagName('img');

for (let img of allImages) {
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
}


const squareImages = document.getElementsByClassName('square');

for (let img of squareImages) {
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
}

const links = document.querySelectorAll('p a');

for (let link of links) {
    console.log(link.href)
} */



//getElementById()

const banner = document.getElementById('banner');

banner.src = "https://images.unsplash.com/photo-1523324761162-d261f3f30ab1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80";

//getElementsByClassName()

const images = document.getElementsByClassName('square');

images[0].src = "abc.jpg";


//getELementsByTagName()

const allImg = document.getElementsByTagName('img');

for (let image of allImg) {
    image.src = "https://images.unsplash.com/photo-1523324761162-d261f3f30ab1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80";

}


//querySelector()

//It selects first match if multiple elements of same query string are there

const heading = document.querySelector('h1');

heading.innerHTML = "lalalalalalalalalala";

//querySelectorAll()
const paras = document.querySelectorAll('p');

paras[0].innerHTML = "hahaha";

//to select attribute

const attrSelect = document.querySelector('img[alt="lol"]');

attrSelect.src = "https://images.unsplash.com/photo-1497493292307-31c376b6e479?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80";
