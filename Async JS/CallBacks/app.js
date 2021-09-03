//Consider changing the body colour every 2 seconds

/*
setTimeout(() => {
    document.body.style.backgroundColor = "Blue"
}, 2000);

setTimeout(() => {
    document.body.style.backgroundColor = "Red"
}, 2000);

//If we do like this only red shows immediately after 2 seconds
//so we need to use nesting

*/
setTimeout(() => {
    document.body.style.backgroundColor = "Blue",
        setTimeout(() => {
            document.body.style.backgroundColor = "Red",
                setTimeout(() => {
                    document.body.style.backgroundColor = "Orange"
                }, 2000);
        }, 2000);
}, 2000);

//This can be done in other way by making common function and calling the function 

const changeHeadingColor = (color, delay, nextCall) => {
    setTimeout(() => {
        document.querySelector('h1').style.backgroundColor = color;
        nextCall && nextCall();//if callback is passed then call
    }, delay);
}

changeHeadingColor('Red', 2000,
    () => {
        changeHeadingColor('Blue', 2000, () => {
            changeHeadingColor('white', 2000)
        })
    });

/*
callbacks can be helpful in following cases

function searchMovie('Kgf',() => {
    //execute after retrieving search results
    saveToDB(movies, () => {
        //if it works
    },
        () => {
            //if it doesnt work
        })

}, () => {
    //execute if the API fails or data is not retreived
})

*/

//Callbacks are confusing so there is concept called promise