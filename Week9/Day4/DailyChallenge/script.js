const form = document.querySelector('form');
const input = document.getElementById('search');
const container = document.getElementById('container');
const deleteAll = document.getElementById('delete');

form.addEventListener('submit', handleSubmit);
deleteAll.addEventListener('click', deleteAll);

function deleteAll () {
    container.innerHTML = '';
}
function handleSubmit (event) {
    event.preventDefault();
    const searchTerm = input.value;
    input.value = '';
    
    getGifs(searchTerm);
};

function getGifs (word) {
    const url = `https://api.giphy.com/v1/gifs/search?q=${word}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=1`;
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("load", logRequest);
    xhr.open('GET', url);
    xhr.send();
};

function logRequest (event) {
    const response = JSON.parse(event.target.response);
    const firstResult = response.data[0];
    const imageUrl = firstResult.images.fixed_width.webp;
    const altText = firstResult.title;
    createImage(imageUrl, altText);
};

function createImage (erl, alt) {
    const div = document.createElement('div');
    const img = document.createElement('img');
    img.src = url;
    img.alt = alt;

    const button = document.createElement('button');
    button.textContent = 'delete';
    button.addEventListener('click', removeParentDiv);
    div.prepend(button);
    div.prepend(img);
}

function removeParentDiv (e) {
    const parentDiv = e.target.parentElement;
    parentDiv.remove();

}