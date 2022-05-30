let elementos = "elementoOndeVoceEstaIrmao";
let elementosFilho = "elementoOndeVoceEsta";
let elementosFilho2 = "primeiroFilhoDoFilho";

let elementoPai = document.querySelector('#pai');
let elementoFilho = document.querySelector('#elementoOndeVoceEsta');
let elementoFilho2 = document.querySelector('#primeiroFilhoDoFilho');

let criarElementoIrmao = document.createElement("section");
let criarElementoFilho = document.createElement("section");
let criarElementoFilho2 = document.createElement("section");

criarElementoIrmao.innerHTML = elementos;
criarElementoFilho.innerHTML = elementosFilho;
criarElementoFilho2.innerHTML = elementosFilho;

elementoPai.appendChild(criarElementoIrmao);
elementoFilho.appendChild(criarElementoFilho);
elementoFilho2.appendChild(criarElementoFilho2);

elementoFilho2.parentElement.parentElement.children[2];

let chamaQuery = document.querySelector('#paiDoPai');

chamaQuery.children[0].removeChild(primeiroFilho);
chamaQuery.children[0].removeChild(terceiroFilho);
chamaQuery.children[0].removeChild(quartoEUltimoFilho);
chamaQuery.children[0].children[0].removeChild(segundoEUltimoFilhoDoFilho);