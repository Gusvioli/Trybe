const fetch = require('node-fetch');

const fetchJoke = () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  console.log(fetch(url));
  fetch(url)
    .then(response => response.json())
    .then(data => console.log(data));
}

fetchJoke();