import React from "react";
import "./App.css";
import pokemons from "./data";
import PropTypes from "prop-types";

class ListaPokemons extends React.Component {
    render() {
        return pokemons.map((pok) => {
            return (
                <div className="cart__pokemon" key={pok.id}>
                    <div className="cart__pokemon__textos">
                        <div className="cart__pokemons" key={pok.id}></div>
                        <div>{`Name:  ${pok.name}`}</div>
                        <div>{`Tipo:  ${pok.type}`}</div>
                        <div>{`Peso:  ${pok.averageWeight.value} ${pok.averageWeight.measurementUnit}`}</div>
                    </div>
                    <div>
                        <img src={pok.image} alt={pok.name} />
                    </div>
                </div>
            );
        });
    }
}

class App extends React.Component {
    render() {
        return (
            <>
                <div className="header">{"Pokedex"}</div>
                <div className="cart__pokemons">
                    <ListaPokemons />
                </div>
            </>
        );
    }
}

App.propTypes = {
    pokemons: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        type: PropTypes.string,
        averageWeight: PropTypes.shape({
            value: PropTypes.number,
            measurementUnit: PropTypes.string,
        }),
        image: PropTypes.string,
    }),
};

export default App;
