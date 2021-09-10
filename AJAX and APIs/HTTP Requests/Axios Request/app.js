//Axios JS library for HTTP requests
//We have to import it - Here we do it using script tag from  its github repo

//using axios.get
axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
    .then(res => console.log(res.data.ticker.price))
    .catch(err => console.log('Error! - ', err));

//using axios.get with async function

async function getPrice() {
    try {
        const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd');
        console.log(res.data.ticker.price);
    }
    catch (e) {
        console.log("Error! -", e);
    }
}

console.log("using async and await:", getPrice());

//setting headers using axios and adding the joke on button click to UL

const button = document.querySelector('button');

button.addEventListener('click', () => addJoke());


const addJoke = async () => {

    const jokeText = await getJoke();
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    li.append(jokeText);
    ul.append(li);



};

const getJoke = async () => {
    try {
        //headers as config 
        const config = {
            headers: { Accept: 'application/json' }
        };
        const joke = await axios.get('https://icanhazdadjke.com', config);//sending headers with request
        return joke.data.joke;
    }
    catch (e) {
        return 'Sorry no more jokes:(';
    }

}

//TO make a TV show search app and to retrieve images
//api.tvmaze.com/search/shows/q=?

const form = document.querySelector('form');
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const searchText = form.elements.search.value;
    // const shows = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchText}`);
    config = { params: { q: searchText } };
    const shows = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    displayImages(shows.data);
})

const displayImages = (shows) => {
    for (const res of shows) {
        let Image = document.createElement('img');

        if (res.show.image) {
            Image.src = res.show.image.medium;
            document.body.append(Image);
        }
    }


}