const resultado = (numero, checa) => {
  let numeroAleatorio = Math.floor(Math.random() * 5 + 1);
  return checa(numero, numeroAleatorio) ? "Parabéns você ganhou" : "Tente novamente";
};

const checa = (a, b) => a === b;

resultado(2,checa);

module.exports = { resultado, checa };