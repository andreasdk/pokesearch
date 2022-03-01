export default function PokeCard({ pokemon }) {
    return (
      <article>
        <img src={pokemon.img} alt={pokemon.name}/>
        <h3>{pokemon.name}</h3>
        <p>#{pokemon.id}</p>
      </article>
    );
}