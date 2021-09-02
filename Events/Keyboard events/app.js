// keyboard events

//every time we call function with events the event passes some info to the function 
//We can collect that info by adding some parameter in function

const box = document.querySelector('input');

box.addEventListener('keydown', function () {
    console.log("Key Down");
})

box.addEventListener('keyup', function (e) {
    console.log("Key Up");
    console.log(e);// to get info about event
    console.log(e.key);
    console.log(e.code);
})

//If we want to use key events on game It should listen on entire window as below

window.addEventListener('keydown', (e) => {
    switch (e.code) {
        case 'ArrowUp': console.log('Up!!');
            break;

        case 'ArrowDown': console.log('Down!!');
            break;

        case 'ArrowLeft': console.log('Left!!');
            break;

        case 'ArrowRight': console.log('Right!!');
            break;

        default: console.log('Ignore!');

    }
})