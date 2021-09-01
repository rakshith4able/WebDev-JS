//We can access parent ,children and sibling  of the selected element object

//Accessing parents

//Accessing parent one level above  of first bold 

const bold = document.querySelector('b');

console.log(bold.parentElement);//returns parent element object from DOM

console.log(bold.parentElement.parentElement);//returns grand parent element object from DOM

//Accessing children

const para = bold.parentElement;

console.log(para.childElementCount);//This returns child element count

console.log(para.children);//This returns children as HTML collection which is iterable but not an actual array

//Accessing next and previous siblings

const squareImage = document.querySelector('.square');

console.log(squareImage.nextSibling);//returns next node. in this case it is text node containing space

console.log(squareImage.nextElementSibling);//returns next element sibling 

console.log(squareImage.previousSibling);//returns previous node. in this case it is text node containing space

console.log(squareImage.previousElementSibling);//returns previous element sibling 