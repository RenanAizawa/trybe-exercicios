import React from "react";

const conteudos = [
    {
      conteudo: 'High Order Functions',
      bloco: 8,
      status: 'Aprendido'
    },
    {
      conteudo: 'Composicao de Componentes',
      bloco: 11,
      status: 'Aprendendo',
    },
    {
      conteudo: 'Composicao de Estados',
      bloco: 12,
      status: 'Aprenderei'
    },
    {
      conteudo: 'Redux',
      bloco: 16,
      status: 'Aprenderei'
    },
  ];

class Component extends React.Component{
    render() {
      return (conteudos.map((curr) => {
          return <div>
                <p>O conteudo é: {curr.conteudo}</p>
                <p>Status: {curr.status}</p>
                <p>Blobo: {curr.bloco}</p>
          </div>
      }))
    };
}

export default Component;