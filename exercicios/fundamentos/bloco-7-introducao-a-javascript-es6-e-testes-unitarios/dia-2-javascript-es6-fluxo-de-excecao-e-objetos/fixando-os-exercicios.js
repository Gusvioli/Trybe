// const getDayName = (number) => {
//     const dayNumber = number - 1;
//     const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
//     return days[dayNumber];
//   };
  
//   const printDayname = (dayNumber) => {
//     console.log(getDayName(dayNumber));
//   };
  
//   printDayname(7);
// const getDayName = (number) => {
//     if (number < 1 || number > 7) throw new Error('Informe um número entre 1 e 7');
//     const dayNumber = number - 1;
//     const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
//     return days[dayNumber];
//   };
  
//   const printDayname = (dayNumber) => {
//     try {
//       console.log(getDayName(dayNumber));
//     } catch (e) {
//       console.log(e.message);
//     }
//   };
  

// printDayname(10);

// const objeto = {
//     nome: 'Gustavo'
// };
// console.log(objeto.nome);

const starships = {
    option1: "Tardis",
    option2: "Millennium Falcon",
    option3: "Enterprise",
    option4: "Heart of Gold"
  }
  console.log(Object.values(starships));