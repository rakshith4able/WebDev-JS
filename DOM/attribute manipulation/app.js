//setAttribute(1,2) and get Attribute()

//getting values of attribute

const firstLink = document.querySelector('a');

console.log(firstLink.href);//returns value of attribute from javascript object

//using getAttribute()

console.log(firstLink.getAttribute('href'));// returns value of attribute from html

//setting values of attribute

const textBox = document.querySelector('input[type="text"]');

textBox.value = "hahaha";

//setting value of attribute using setAttribute(attribute,value);

textBox.setAttribute('type', 'color');



