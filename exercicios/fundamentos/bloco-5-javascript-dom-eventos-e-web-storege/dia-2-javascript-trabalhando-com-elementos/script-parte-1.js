//ok 1 - Acesse o elemento elementoOndeVoceEsta .
//ok 2 - Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
//ok 3 - Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos 
//     vídeos da aula anterior, como fazer isso?
//ok 4 - Acesse o primeiroFilho a partir de pai .
//ok 5 - Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
//ok 6 - Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
// 7 - Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
//ok 8 - Agora acesse o terceiroFilho a partir de pai .

// 1
let ondeVcoeEsta = document.getElementById("elementoOndeVoceEsta");

// 2 
ondeVcoeEsta.parentElement.style.color = "red";

// 3 
let primeiroFilhoDoFilho = document.getElementById("primeiroFilhoDoFilho");
primeiroFilhoDoFilho.innerHTML = "Estude muito pra aprender!!!";

// 4 
let pai = document.getElementById("pai").firstElementChild;

// 5 
let elementoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta");
elementoOndeVoceEsta.firstChild;

// 6
console.log(elementoOndeVoceEsta.parentElement.nextSibling);

// 7 
console.log(elementoOndeVoceEsta.parentElement);

// 8
pai.nextElementSibling.nextElementSibling;