import React from 'react'
import Pokemon from './Pokemon'

const PokemonContainer = () => {

    const savePoke = [
        {
            id: 1,
            pokeID: 835,
            level: 50,
            gender: "male",
            nature: "hardy",
            IV: {
                hp: 20,
                attack: 15,
                defense: 15,
                specialAttack: 10,
                specialDefense:10,
                speed: 15,
            },
            EV: {
                hp: 0,
                attack: 0,
                defense: 0,
                specialAttack: 0,
                specialDefense:0,
                speed: 0,
            }
        },
        {
            id: 1,
            pokeID: 6,
            level: 50,
            gender: "female",
            nature: "hardy",
            IV: {
                hp: 20,
                attack: 15,
                defense: 15,
                specialAttack: 10,
                specialDefense:10,
                speed: 15,
            },
            EV: {
                hp: 0,
                attack: 0,
                defense: 0,
                specialAttack: 0,
                specialDefense:0,
                speed: 0,
            }
        }
    ]


    return (
        <div>
            {/* HEADER */}
            {savePoke.map(pokemon => <Pokemon pokemon={pokemon} key={pokemon.id} />)}
            {/* OPTIONS */}
        </div>
    )
}

export default PokemonContainer
