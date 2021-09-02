//2nd way of adding events 

const v2 = document.querySelector('#v2');

//v2.onclick = alert("HAHA"); this wont work properly becoz we have to give function as assigned in RHS


v2.onclick = function () { alert("hihihi") };

v2.onclick = () => alert("hahahaha");

//the disadvantage in this way is the latest event alone is triggered. that is If we give two events the 2nd is triggered

//this can be overcomed in 3rd way of adding events


//3rd way is as below using addEventListener(1,2);

const v3 = document.querySelector('#v3');

v3.addEventListener('dblclick', () => {
    alert("This is 3rd version");
});

function scream() {
    console.log("AHHHHHHHH");
    console.log("Get away from me!");
}

v3.addEventListener('mousedown', scream, { once: true });//This also takes 3rd argument which are options as object


