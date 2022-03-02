export default function PokeCard( {name, img, id} ) {

    return (
      <article>
        <img src={img} alt={name}/>
        <h3>{name}</h3>
        <p>#{id}</p>
      </article>
    );
}