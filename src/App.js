
import './App.css';
import { useState, useEffect } from 'react';

import PokeSearch from './components/PokemonSearch';

function App() {
  const [PokemonList, SetPokemonList] = useState([]);
	const [search, SetSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const api = {
    base: "https://pokeapi.co/api/v2/pokemon"
  }

  const HandleSearch = e => {
		e.preventDefault();
		FetchPokemon(search);
	}

  const FetchPokemon = async (query) => {
		const temp = await fetch(`${api.base}/${query}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;        
    })
    .then(()=> {
      return SetPokemonList(temp.results)
    })
	}

  useEffect(() => {
		FetchPokemon()
    .then(()=> {
      setIsLoading(false);
    })
    
   
	}, []);
  
  return (
    isLoading ? <p>loading</p> : 
    <div className="App">
    <PokeSearch
					HandleSearch={HandleSearch}
					search={search}
					setSearch={SetSearch}
					PokemonList={PokemonList} />
    </div>
  );
}

export default App;
