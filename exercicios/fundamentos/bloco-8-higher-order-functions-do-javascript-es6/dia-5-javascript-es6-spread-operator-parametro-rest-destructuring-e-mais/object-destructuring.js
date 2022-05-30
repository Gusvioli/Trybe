// definindo o objeto
// definindo o objeto
// const character = {
//     name: 'Luke SkyWalker',
//     age: '53',
//     description: {
//       specieName: 'Human',
//       jedi: true,
//     },
//     homeWorld: {
//       name: 'Tatooine',
//       population: '200.000',
//     },
//   };

//   // desestruturando o objeto:
//   const { name, age, homeWorld: { name: planetName, population: populate }, description: { jedi } } = character;

//   // imprimindo os valores:
//   console.log(`Esse é o ${name}, ele tem ${age} anos, mora no planeta ${planetName} que tem ${populate} de população, e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);

// ############################################

// const pessoa = {
//     nome: 'Gustavo',
//     idade: 39,
//     endereco: {
//         cidade: 'Rio de Janeiro',
//         estado: 'RJ',
//         rua: 'Rua Quitembu',
//         numero: '21',
//         complemento: 'Casa 7',
//     },
//     profissao: 'Desenvolvedor',
//     hobbies: ['Programar', 'Jogar', 'Ler'],
// };

// const { nome, idade, endereco: { cidade, estado, rua, numero, complemento }, profissao, hobbies } = pessoa;

// console.log(`${nome} tem ${idade} anos, mora em ${cidade} - ${estado} vive na ${rua}, Numero: ${numero} complemento: ${complemento} profissão: ${profissao} e hobbies: ${hobbies}`);

// ############################################

// definindo o objeto
// const character = {
//     name: 'Luke SkyWalker',
//     age: '53',
//     description: {
//       specieName: 'Human',
//       jedi: true,
//     },
//     homeWorld: {
//       name: 'Tatooine',
//       population: '200000',
//     },
//   };    

//   // Queremos extrair o nome do personagem, a idade, o nome do planeta e verificar se ele é um Jedi. Depois de feito, precisamos imprimir essas informações no console.log(), para isso, vamos utilizar a desestruturação de objetos:

//   const { name, age, homeWorld: { name: planetName, population: populate }, description: { jedi } } = character;
//   console.log(`${name} tem ${age} anos, mora em ${planetName} que tem ${populate} de população, e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);

// const student = {
//     a: 'Maria',
//     b: 'Turma B',
//     c: 'Matematica',
//   };

//   const { a: nome, b: classAssignged, c: subject } = student;
//   console.log(`${nome} esta na ${classAssignged} e estuda ${subject}`);

// 1 - Temos dois objetos, um com informações pessoais de uma pessoa usuária e outro com informações referentes ao cargo desta pessoa usuária na empresa trappistEnterprise. Precisamos criar um terceiro objeto, que terá os dados pessoais e os dados de cargo juntos. Para isso, utilize o spread operator.


const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
};

const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
};

const {
    name,
    age,
    nationality
} = user;
const {
    profession,
    squad,
    squadInitials
} = jobInfos

console.log(`Hi, my ${name} is Maria, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my ${squad} is ${squadInitials}-Rocket Landing Logic`);