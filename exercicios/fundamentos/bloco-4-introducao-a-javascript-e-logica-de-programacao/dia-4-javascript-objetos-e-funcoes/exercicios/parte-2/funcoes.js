console.log("----------1----------");

function verificaPalindrome(params) {
  let separar = params.split("");
  let inverter = separar.reverse();
  let reverter = inverter.join("");

  if (reverter === params) {
    return true;
  } else {
    return false;
  }
}

console.log(verificaPalindrome("arara"));
console.log(verificaPalindrome("desenvolvimento"));

console.log("----------2----------");

let array = [2, 3, 6, 7, 10, 1];

function valorMaior(params) {
  let arruVolatil = 0;
  let indiceDoValor = 0;

  for (let index = 0; index < params.length; index += 1) {
    if (arruVolatil < params[index]) {
      arruVolatil = params[index];
      indiceDoValor = index;
    }
  }

  return indiceDoValor;
}

console.log(valorMaior(array));

console.log("----------3----------");

let array2 = [2, 4, 6, 7, 10, 0, -3];

function valorMenor(params) {
  let arruVolatil = 0;
  let indiceDoValor = 0;

  for (let index = 0; index < params.length; index += 1) {
    if (arruVolatil > params[index]) {
      arruVolatil = params[index];
      indiceDoValor = index;
    }
  }

  return indiceDoValor;
}

console.log(valorMenor(array2));

console.log("----------4----------");

let nomes = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"];

function palavraDeMiorTamanho(params) {
  let nomesTamanho = [];
  let nomesIndice = 0;
  let nomesValor = "";

  for (let index = 0; index < params.length; index += 1) {
    nomesTamanho.push(params[index].length);
    if (nomesIndice < params[index].length) {
      nomesIndice = params[index].length;
      nomesValor = params[index];
    }
  }
  return nomesValor;
}

console.log(palavraDeMiorTamanho(nomes));

console.log("----------5----------");

// let inteiros = [2, 3, 2, 5, 8, 2, 3];

// function inteirosRepetidos(params) {
//   let inteirosIguais = 0;
//   let somar = 0;
//   for (let index = 0; index < params.length; index += 1) {
//     inteirosIguais = params[index];
//     for (let index2 = 0; index2 < params.length; index2 += 1) {
//       if (inteirosIguais === params[index2]) {
//         somar += 1;
//       }
//     }
//   }
//   return somar;
// }

// console.log(inteirosRepetidos(inteiros));

console.log("----------6----------");
let somaO = 5;
let somado = 0;

function somatorioDeInteiros(params) {
  for (let index = 0; index <= params; index += 1) {
    somado += index;
  }
  return somado;
}

console.log(somatorioDeInteiros(somaO));

console.log("----------7----------");

function verificaFimPalavra(params, params2) {
  let stringWordSplit = params.split("");
  let inverterStringWordSplit = stringWordSplit.reverse();
  let stringEndingSplit = params2.split("");
  let inverterStringEndingSplit = stringEndingSplit.reverse();

  let somar = 0;

  for (let index = 0; index < params.length; index += 1) {
    if (inverterStringEndingSplit[index] === inverterStringWordSplit[index]) {
      somar += 1;
    }
  }

  if (somar === params2.length) {
    return true;
  } else {
    return false;
  }
}
console.log(verificaFimPalavra("trybe", "be"));
console.log(verificaFimPalavra("joaofernando", "fernan"));
