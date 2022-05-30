const valorCusto = 7000;
const valorVenda = 11520;
let quantidadesVenda = 1000;
let impostoSobreCusto = 20;

let valorCustoTotal = valorCusto + (valorCusto / 100) * 20;
let lucro = (valorVenda - valorCustoTotal) * quantidadesVenda;

if (valorCusto >= 0 || valorCusto >= 0) {
  if (lucro > 0) {
    console.log("O lucro da empresa é de " + lucro);
  } else {
    console.log("A empresa teve um prejuiso de " + lucro);
  }
} else {
  console.log("Valor(es) menor(es) que zero(0)");
}
