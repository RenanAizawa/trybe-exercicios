import React, { Component } from "react";
import pokemons from "./data";

class Pokemon extends Component{
    const {name, type, averageWeight:[{value, measurementUnit:
        Weight}], image} = pokemons;
    render(){
        return (
            pokemons.map((curr) => {
                return (<div className="Card">
                    <span>{name}</span>
                    <span>{type}</span>
                    <span>Average weight: {value}{Weight}</span>
                    <img src={image}></img>
                </div>);
            })
        );
    }
}

export default Pokemon;