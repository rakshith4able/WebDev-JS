//innerText and textContent are similar.
// When some elements are hidden with style set to display none those contents will be visible with text content but not in innerText


//innerText
const heading = document.querySelector('h1');

heading.innerText = "<b>Hahaha</b>";

//textContent
const para = document.querySelector('p');

para.textContent = "<b>Hahaha</b>";


//innerHTML
const li = document.querySelector('li');

li.innerHTML = "<i>LOLOLO</i>";



