import React from 'react'
import Pokemon from './Pokemon'
import PokemonHeader from './PokemonHeader'
import PokemonButtons from './PokemonButtons'
import styled from 'styled-components'


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
            id: 2,
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
        },
        {
            id: 3,
            pokeID: 150,
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
            id: 4,
            pokeID: 355,
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
            id: 5,
            pokeID: 430,
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
            id: 6,
            pokeID: 500,
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
    ]


    return (
        <PokemonContain>
            <PokemonHeader />
            {savePoke.map(pokemon => <Pokemon pokemon={pokemon} key={pokemon.id} />)}
            <PokemonButtons />
        </PokemonContain>
    )
}

export default PokemonContainer

const PokemonContain = styled.div`
    
`