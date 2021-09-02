//Form Elements

//form submit event

const form = document.querySelector('#tweetForm');

form.addEventListener('submit', function (e) {//Event on form submission

    e.preventDefault();// To prevent redirecting form / refreshing on submit
    /*
        //To get for input field values  by normal approach
        const input = document.querySelectorAll('input');
        const username = input[0];
        const tweet = input[1];
        console.log(username.value);
        console.log(tweet.value);
    */


    //the event object contains the information about elements by their names in form event prperty called elements 
    //we can check it using console.dir(formvariable);

    //console.dir(form);

    //accessing input values using elements property of form

    const usernameInput = form.elements.username;
    const TweetInput = form.elements.tweet;
    addTweet(usernameInput.value, TweetInput.value);
    usernameInput.value = '';
    TweetInput.value = '';

})

function addTweet(username, tweet) {
    const list = document.createElement('li');
    const bold = document.createElement('b');
    bold.append(username);
    list.append(bold);
    list.append(`- ${tweet}`);
    const con = document.querySelector('#container');
    con.append(list);
}