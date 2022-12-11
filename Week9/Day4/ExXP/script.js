const url = 'https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
const xhr = new XMLHttpRequest();
xhr.addEventListener("load", logRequest);
xhr.open('GET', url);
xhr.send();

function logRequest () {
    const response = JSON.parse(xhr.response);
    const element = response.data[0];

    console.log(response);
};

// // Dont we need here that gif element would display in the browser?


// Ex2

const url = 'https://api.giphy.com/v1/gifs/search?q=sun=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=10&offset=2';
const xhr = new XMLHttpRequest();
xhr.addEventListener("load", logRequest);
xhr.open('GET', url);
xhr.send();

function logRequest () {
    const response = JSON.parse(xhr.response);
    console.log(response);
};


