// const url = "https://api.github.com/users/diego3g";
const url = "https://pokeapi.co/api/v2/pokemon/ditt";

const pegarMoedas = async () => {
  try {

    const response = await fetch(url);
    const json = await response.json();
    // console.log(json);


    const divMoedas = document.querySelector(".moedas");
    divMoedas.appendChild(document.createElement("li")).innerHTML = json.abilities[0].ability.name;
    divMoedas.appendChild(document.createElement("li")).innerHTML = json.abilities[0].ability.url;

  } catch (error) {
    console.log(error);
  }
};

window.onload = pegarMoedas();
