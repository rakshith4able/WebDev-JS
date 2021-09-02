//change and input form control

//change event works when there is change in the input content after leaving the field

const input = document.querySelector('input');
const h1 = document.querySelector('h1');
input.addEventListener('change', () => {
    console.log("AHHHHHHH");
});

//input event works whenever the value inside the input is changed

input.addEventListener('input', () => {
    h1.innerText = input.value;
})