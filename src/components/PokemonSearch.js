import PokeCard from "./PokemonCard"

export default function PokeSearch(props) {
    console.log(props)
    return(
        <main>
            <div className="search__container">
                <form 
                className="search__form"
                onSubmit={props.HandleSearch}>
                    <input
                    type="search"
                    placeholder="Search for a Pok&eacute;mon"
                    required
                    value={props.search}
                    onChange={e => props.setSearch(e.target.value)}/>
                    <button>Submit</button>
                </form>
            </div>
            <div className="pokemon__list">
            
					<PokeCard
						name={props.pokemonList[0]}

                        id={props.pokemonList[1]}
                        img={props.pokemonList[2]} />
			
            </div>
        </main>
    )
}