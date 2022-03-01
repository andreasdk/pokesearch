import PokeCard from "./PokemonCard"

export default function PokeSearch(props) {
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
                </form>
            </div>
            <div className="pokemon__list">
            {props.PokemonList.map(pokemon => (
					<PokeCard
						name={pokemon.name}
						key={pokemon.id}
                        img={pokemon.sprites.front_default} />
				))}
            </div>
        </main>
    )
}