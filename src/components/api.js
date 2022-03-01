import { useState } from "react";
const api = {
    base: "https://pokeapi.co/api/v2/pokemon/"
}



const fetchPokemon = () => {
    return fetch(`${api.base}/${query}`)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log(data);
        return data;        
    })
    .then(() => {
        setQuery('');
    })

}

export default fetchPokemon;