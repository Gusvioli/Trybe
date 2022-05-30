const wakeUp = () => 'Acordando!!';

const outra = () => 'Bora tomar café!!';

const mais = () => 'Partiu dormir!!';

const doingThings = (func) => {
  console.log(func());
};

// Ao chamar a função doingThings:
doingThings(wakeUp);

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!