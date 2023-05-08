let button = document.getElementById('btn');
let jokeText = document.getElementById('joke');

let url = 'https://api.chucknorris.io/jokes/random';

button.addEventListener('click', getData);

async function getData() {
    const response = await fetch(url);
    const jsonData = await response.json();

    console.log(jsonData);

    jokeText.innerText = jsonData.value;
}