// Object Property Shorthand
// Você já deve ter percebido que uma das vantagens do ES6 é que a nova sintaxe elimina códigos repetitivos, 
// contribuindo para a limpeza do código. A property shorthand é um recurso muito útil na hora de declarar objetos em Javascript. 
// A função abaixo recebe como parâmetro informações sobre um novo usuário e retorna um objeto contendo esses dados. Observe que as 
// propriedades do objeto retornado e os argumentos que passamos para newUser são idênticos. Essa repetição parece desnecessária, não é mesmo?

// const newUser = (id, name, email) => {
//     return {
//       id: id,
//       name: name,
//       email: email,
//     };
//   };
  
//   console.log(newUser(54, 'isabella', 'isabella@email.com')); // { id: 54, name: 'isabella', email: 'isabella@email.com' }

//########################################################################


//   const newUser = (id, name, email) => {
//     return {
//       id,
//       name,
//       email,
//     };
//   };
  
//   console.log(newUser(54, 'isabella', 'isabella@email.com')); // { id: 54, name: 'isabella', email: 'isabella@email.com' }

// #########################################################################

// Para Fixar
// Agora é hora de praticar: altere a função getPosition utilizando a property shorthand.

const getPosition = (latitude, longitude) => ({
    latitude,
    longitude,
});
  
  console.log(getPosition(-19.8157, -43.9542));