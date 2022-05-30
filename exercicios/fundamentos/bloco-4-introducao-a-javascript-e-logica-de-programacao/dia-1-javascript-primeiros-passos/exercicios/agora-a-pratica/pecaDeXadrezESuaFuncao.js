let nomeDaPeca = "DAMA";

switch (nomeDaPeca.toLowerCase()) {
  case "rei":
    console.log("Uma casa em todas as direções");
    break;
  case "dama":
    console.log("Até o final do tabuleiro e em todas as direções");
    break;
  case "torre":
    console.log("Lado direito, lado esquerdo,e frente e trás");
    break;
  case "bispo":
    console.log("Diagonais");
    break;
  case "cavalo":
    console.log("Em éle");
    break;
  case "peão":
    console.log("Frente");
    break;
  default:
    console.log("Essa peça de xadrez é invalida!");
    break;
}
