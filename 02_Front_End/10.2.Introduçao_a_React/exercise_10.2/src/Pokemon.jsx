import React, { Component } from "react";
import pokemons from "./data";
import './pokemon.css'

class Pokemon extends Component{
   render() {
    return (pokemons.map((curr) => {
        return (
            <div key={curr.id} className="Card">
                <span> {curr.name} </span>
                <span> {curr.type} </span>
                <span> Average weigth: {curr.averageWeight.value} {curr.averageWeight.measurementUnit} </span>
                <img src={curr.image} alt={curr.name}></img>
            </div>
        )
    }))
   };
}

export default Pokemon;