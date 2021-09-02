/* Event delegation

Consider we have applied some javascript event for the element

For the same element if it is added later to the document The events fails to work

We can correct it using parent of that element and target property this is called event delegation
*/

const form = document.querySelector('form');

const enter = document.querySelector('button');

const contain = document.querySelector('#container');
enter.addEventListener('click', (e) => {
    e.preventDefault();
    const ele = document.createElement('li');
    ele.append(form.elements.lol.value);
    contain.append(ele);
});

/*
//The following event does not work on adding new lists using javascript

const Lists = document.querySelectorAll('li');

for (const li of Lists) {
    li.addEventListener('click', () => {
        li.remove();
    });

}*/

const parent = document.querySelector('ul');
parent.addEventListener('click', (e) => {
    //e.target.remove();//removes newly added elements too
    //to check and remove only lis
    // console.log(e);
    e.target.nodeName === 'LI' && e.target.remove();
});



