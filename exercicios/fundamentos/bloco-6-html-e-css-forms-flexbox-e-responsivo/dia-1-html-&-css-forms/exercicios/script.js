// document.querySelector("#enviar").addEventListener("click", () => {
  
// });

function botaoPrevenir() {
//   event.preventDefault();
//   const data = document.getElementById("data-viagem").DatePickerX.init();
  const campoNome = document.querySelector("#nome-completo");
  const campoemail = document.querySelector("#e-mail");
  const atrMaxNome = campoNome.attributes.max.value;
  const atrMinNome = campoNome.attributes.min.value;
  const atrMaxEmail = campoemail.attributes.max.value;
  const atrMinEmail = campoemail.attributes.min.value;
  console.log('1');

  if (atrMaxNome <= '40' && atrMinNome >= '10' && atrMaxEmail <= '50' && atrMinEmail >= '10') {
    alert("Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.");
    console.log('2');
} else {
    alert("Dados Inválidos");
    console.log('3');
  }
}
document.getElementById("enviar").addEventListener('click', botaoPrevenir);
