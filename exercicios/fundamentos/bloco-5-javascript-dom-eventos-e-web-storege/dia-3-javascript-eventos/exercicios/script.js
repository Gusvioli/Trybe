function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
// Exercício 1:
const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

function criarDiasDesembro(params) {
  let dias = document.querySelector("#days");
  for (const i of params) {
    let dayCriar = document.createElement("li");
    if (i === 24 || i === 25 || i === 31) {
      dayCriar.className = "day holiday";
      dayCriar.innerHTML = i;
      dias.appendChild(dayCriar);
    } else if (i === 4 || i === 11 || i === 18 || i === 25) {
      dayCriar.className = "day friday";
      dayCriar.innerHTML = i;
      dias.appendChild(dayCriar);
    } else {
      dayCriar.className = "day";
      dayCriar.innerHTML = i;
      dias.appendChild(dayCriar);
    }
  }
}

criarDiasDesembro(dezDaysList);

// Exercício 2:
function criarBotao(nome) {
  let selecionarId = document.querySelector(".buttons-container");
  let criarElementoBtn = document.createElement("button");
  criarElementoBtn.id = "btn-holiday";
  criarElementoBtn.innerHTML = nome;
  selecionarId.appendChild(criarElementoBtn);
}
criarBotao("Feriados");

// Exercício 3:
const eventoCorBtn = document.querySelector("#btn-holiday");

const selecionarLi = document.getElementsByClassName("holiday");



function ev1() {
  for (const key in selecionarLi) {
    selecionarLi[key].style.backgroundColor = "rgb(20,238,238)";
  }
}
eventoCorBtn.addEventListener("click", ev1);

function ev2() {
  for (const key in selecionarLi) {
    selecionarLi[key].style.backgroundColor = "rgb(238,238,238)";
  }
}
eventoCorBtn.addEventListener("mouseout", ev2);

// Exercício 4:
function btnCriarSextaFeira(nome) {
  const slecionarIdBTNFriday = document.querySelector(".buttons-container");
  let criarElemento = document.createElement('button');
  criarElemento.innerText = nome;
  criarElemento.className = "btn-friday";
  slecionarIdBTNFriday.appendChild(criarElemento);
  
}

btnCriarSextaFeira("Sexta-feira");

// Exercício 5:
const selecionarBtnSextaFeira = document.querySelector('.btn-friday');
let selecionaBTN = document.getElementsByClassName('friday'); 


    
selecionarBtnSextaFeira.addEventListener('click', function () {
  for (const key in selecionaBTN) {
    selecionaBTN[key].style.color = "red";
  }
});

selecionarBtnSextaFeira.addEventListener('mouseout', function () {
  for (const key in selecionaBTN) {
    selecionaBTN[key].style.color = "#777";
  }
});

// Exercício 6:


// for (const key in lis) {
//   let lis = document.getElementsByClassName('day');
//   lis[key].addEventListener("mouseover", function(liss) {
//     liss.target.style.fontSize = '24px';  
//   });
//   lis[key].addEventListener("mouseout", function(liss) {
//     liss.target.style.fontSize = '20px';  
//   });
// }

// Exercício 7 e Exercício 8:
let selecionarMyTasks = document.querySelector('.my-tasks');
let escutarAdicionar = document.querySelector("#btn-add");
let slect

escutarAdicionar.addEventListener("click", tarefas);

function tarefas() {
  let selecionarCompromisso = document.querySelector('#task-input');
  let criarElementoDiv = document.createElement('div');
  let criarElementoSpan = document.createElement('span');
  let criarElementoBr = document.createElement('br');
  criarElementoDiv.classList = "task";
  criarElementoDiv.style.backgroundColor = "yellow";
  criarElementoSpan.innerHTML = selecionarCompromisso.value;
  selecionarMyTasks.appendChild(criarElementoDiv);
  selecionarMyTasks.appendChild(criarElementoBr);
  criarElementoDiv.appendChild(criarElementoSpan);
  
}


