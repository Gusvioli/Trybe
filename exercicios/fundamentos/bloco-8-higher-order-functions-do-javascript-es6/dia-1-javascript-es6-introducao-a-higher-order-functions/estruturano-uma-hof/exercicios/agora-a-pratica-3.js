const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const resultado = (ra, sa, checa) => {
  const ch =  checa(ra, sa);
  return `O resultado é ${ch}.`
};

const checa = (ra, sa) => {
  let acertos = [];
  let erros = [];
  for (let index = 0; index < ra.length; index += 1) {
    ra[index] === sa[index] ? acertos.push(ra[index]) : erros.push(ra[index]);
  }
  const soma = acertos.length * 1;
  const sub = soma - (erros.length * 0.5);
  
  return sub;
};

resultado(RIGHT_ANSWERS, STUDENT_ANSWERS, checa);

module.exports = { resultado , checa };
