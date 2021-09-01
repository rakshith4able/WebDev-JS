//Another way of changing style is by using classes

//adding class purple to H1

const h1 = document.querySelector('h1');

h1.setAttribute('class', 'purple');//adds class called purple

h1.setAttribute('class', 'border');//adds class called border but class purple is replaced with border

h1.setAttribute('class', 'border purple');//adds both classes

const currentClasses = h1.getAttribute('class');// Another way to add both classes

h1.setAttribute('class', `${currentClasses} purple`);

//Most preferred way is using classList

//lets check it with p

const p = document.querySelector('p');

console.log(p.classList);

p.classList.add('purple');// adds class to the list

console.log(p.classList);//now classlist contains purple

p.classList.add('border');// adds border class to the list without replacing purple

console.log(p.classList);//now classlist contains purple and border

p.classList.remove('border');//removes border class from classList

p.classList.contains('border');//returns true if classList contains the arguement in classList or else false

p.classList.toggle('border');// adds class to class list if the arguement is not present in classlist
                            //removes class from classlist if arguement is present in classlist. acts like on and off







