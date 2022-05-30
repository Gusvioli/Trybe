let n = 5;

let stringEstrela = "*";
let strinEspaxos = " ";
let stringVazia = "";
let posicao = n;

for (let index = 0; index <= n; index += 1) {
  for (let index2 = 0; index2 <= n; index2 += 1) {
    if (index2 < posicao) {
      stringVazia = stringVazia + strinEspaxos;
    } else {
      stringVazia = stringVazia + stringEstrela;
    }
  }

  console.log(stringVazia);
  stringVazia = "";
  posicao -= 1;
}
