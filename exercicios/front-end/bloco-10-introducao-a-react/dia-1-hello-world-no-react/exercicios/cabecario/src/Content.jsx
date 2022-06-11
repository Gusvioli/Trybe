import React from "react";

const conteudos = [
    {
        conteudo: "High Order Functions",
        bloco: 8,
        status: "Aprendido",
    },
    {
        conteudo: "Composicao de Componentes",
        bloco: 11,
        status: "Aprendendo",
    },
    {
        conteudo: "Composicao de Estados",
        bloco: 12,
        status: "Aprenderei",
    },
    {
        conteudo: "Redux",
        bloco: 16,
        status: "Aprenderei",
    },
];

const exibir = conteudos.map((ma) => (
    <li className="cart__li">
        <span className="span">O conteúdo é: {ma.conteudo}</span>
        <span className="span">Status: {ma.status}</span>
        <span className="span">Bloco: {ma.bloco}</span>
    </li>
));

class Content extends React.Component {
    render() {
        return <ul>{exibir}</ul>;
    }
}

export default Content;
