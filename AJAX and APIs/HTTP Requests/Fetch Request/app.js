//Making Fetch request 
//New way of requesting in JS
//Supports promises 

//First was of using fetch with then and catch

fetch('https://api.cryptonator.com/api/ticker/btc-usd')
    .then((response) => {
        console.log(response);//Fetch API resolves promise with satrting headers but data wont be there 
        //so we have to add one more step thats why axios come which overcomes this
        return response.json();
    })
    .then((data) => {
        console.log(data.ticker.price);
    })
    .catch((e) => {
        console.log('somethis went wrong!', e)
    });

//fetch using async and await

async function fetchData() {

    try {
        const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd');
        const data = await res.json();
        console.log('Done!', data.ticker.price);
    }

    catch (e) {
        console.log('Error!', e);
    }

}

fetchData();