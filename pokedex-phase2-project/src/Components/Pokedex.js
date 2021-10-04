import React, {useState, useEffect} from 'react';
import Pokemon from './Pokemon';

function Pokedex() {
    const [pokemonData, setPokemonData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/pokemons")
            .then(resp => resp.json())
            .then(data => setPokemonData(data));
    }, [])

    console.log(pokemonData);

    const renderPokemon = pokemonData.map(pokemon => {
        return <Pokemon key={pokemon.id} name={pokemon.name.eng} id={pokemon.id} />
    })

    return (
        <div>
            {renderPokemon}
        </div>
    );
}

export default Pokedex;

//Ask about where to put this db.json file to better access it

// {
//     "id": "001",
//     "name": {
//       "eng": "Bulbasaur",
//       "jpn": "フシギダネ",
//       "jpn_ro": "Fushigidane"
//     },
//     "slug": {
//       "eng": "bulbasaur",
//       "jpn": "fushigidane"
//     },
//     "icons": {
//       "_": {}
//     }
//   },