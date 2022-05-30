// const greeting = (user) => console.log(`Welcome ${user = 'Usuário'}!`);

// greeting(); // Welcome undefined!

// const greeting = (user) => {
//     const userDisplay = typeof user === 'undefined' ? 'usuário' : user;
//     console.log(`Welcome ${userDisplay}!`);
//   };
  
//   greeting('Gustavo'); // Welcome usuário!

//########################################################################

// Para Fixar
// Para praticar, escreva uma função multiply que multiplique dois números passados como argumentos. 
// Atribua como default o valor 1 caso não seja passado nenhum valor como segundo parâmetro.

const multiply = (number, value) => {
    // Escreva aqui a sua função
    const resultado = typeof value === 'undefined' ? 1 : value;
    const resultado2 = typeof number === 'undefined' ? 1 : number;
    return number * resultado;
  };
  
  console.log(multiply(2,5)); // 40