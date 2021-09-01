//We can create element using createElement()

const img = document.createElement('img');//creates image element but wont show up

img.src = "https://images.unsplash.com/photo-1449088182871-0b7dbffc501b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80";

//even it wont show up after adding src

//to make it wen have to append it or prepend it

document.body.appendChild(img);//adds image at end of body

//to add nodes also to the starting or ending of paragraph

const p = document.querySelector('p');

p.append("lololollo");// adds text to end of para

p.prepend("hahahaha");//adds text to start of para

// To add adjacent sibling

//Consider adding heading below banner

const h2 = document.createElement("h2");

h2.append("ABBAAAAAA");

const banner = document.querySelector('#banner');

banner.insertAdjacentElement('afterend', h2);


//TO remove element from DOM we can use remove() or removeElement();

banner.remove();//Removes element

//removeElement() works with relation to parent

const li = document.querySelector('li');
//To remove Li we have to make use of its parent and remove it as below

li.parentElement.removeChild(li);



