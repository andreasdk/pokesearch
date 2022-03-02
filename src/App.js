
import './App.css';
import { useState } from 'react';

import PokeSearch from './components/PokemonSearch';

function App() {
  const [pokemonList, setPokemonList] = useState([]);
	const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  const api = {
    base: "https://pokeapi.co/api/v2/pokemon"
  }

  const HandleSearch = e => {
		e.preventDefault();
		FetchPokemon(search);
    
	}

  const FetchPokemon = (query) => {
    setIsLoading(true); 
		return fetch(`${api.base}/${query}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const pokemonName = data.name;
      const pokemonID = data.id;
      const pokemonImg = data.sprites.front_default;
      const PokemonData = [pokemonName, pokemonID, pokemonImg]
      // console.log(PokemonData);
      // setPokemonList(PokemonData);
      // console.log(pokemonList) 
      setIsLoading(false);
      return PokemonData;       
    })
    .then((data)=> {
      setPokemonList(data);
      console.log(pokemonList)
    })
	}

  
  if (isLoading) return <p>Loading...</p>;
  return (

    <div className="App">
    <PokeSearch
					HandleSearch={HandleSearch}
					search={search}
					setSearch={setSearch}
					pokemonList={pokemonList} />
    </div>
  );
}

export default App;
