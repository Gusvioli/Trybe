// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let guardar = 0;
for (let iterator of numbers) {
  if (iterator % 2 == 1){
    guardar += 1;
  }
}
if (guardar > 0) {
  console.log(guardar);
}else{
  console.log("nenum valor ímpar encontrado");
}



      