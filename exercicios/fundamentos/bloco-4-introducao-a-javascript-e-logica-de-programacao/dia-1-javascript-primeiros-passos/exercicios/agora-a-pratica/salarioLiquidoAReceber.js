let salarioBruto = 4700;
let alicota;
let salarioLiquido;
let alicotaIR;
let parcelaADeduzir;
let resultado;

// ICMS alicota
if (salarioBruto < 1556.94) {
  alicota = 8;
  salarioLiquido = salarioBruto - (salarioBruto / 100) * alicota;
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
  alicota = 9;
  salarioLiquido = salarioBruto - (salarioBruto / 100) * alicota;
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
  alicota = 11;
  salarioLiquido = salarioBruto - (salarioBruto / 100) * alicota;
} else {
  alicota = 570.88;
}

// console.log(alicota);

// IR dedução

if (salarioLiquido < 1903.98) {
  console.log("Salário isento de IR");
} else if (salarioLiquido >= 1903.99 && salarioLiquido <= 2826.65) {
  alicotaIR = 7.5;
  parcelaADeduzir = 142.8;
} else if (salarioLiquido >= 2826.66 && salarioLiquido <= 3751.05) {
  alicotaIR = 15;
  parcelaADeduzir = 354.8;
} else if (salarioLiquido >= 3751.06 && salarioLiquido <= 4664.68) {
  alicotaIR = 22.5;
  parcelaADeduzir = 636.13;
} else if (salarioLiquido > 4664.68) {
  alicotaIR = 27.5;
  parcelaADeduzir = 869.36;
} else {
    console.log("Salário foro do calculo do IR");
}

resultado = (salarioLiquido / 100) * alicotaIR - parcelaADeduzir;
resultado = salarioLiquido - resultado;
console.log("R$ " + resultado);
