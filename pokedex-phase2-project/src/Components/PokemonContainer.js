import React, {useState} from 'react'
import Pokemon from './Pokemon'
import PokemonHeader from './PokemonHeader'
import PokemonButtons from './PokemonButtons'
import PokemonImage from './PokemonImage'
import styled from 'styled-components'


const PokemonContainer = () => {

    const [selectedPokemon, setSelectedPokemon] = useState({
        id: null,
        pokeID: null //use this number for end of url
    })
    const [showSummary, setShowSummary] = useState(false)


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
            pokeID: 10079,
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
        <div>
            <PokemonListImageSummaryContainer>
                <SkewLeftDiv>
                    <PokemonHeader />
                    {savePoke.map(pokemon => <Pokemon pokemon={pokemon} key={pokemon.id} selectedPokemon={selectedPokemon} setSelectedPokemon={setSelectedPokemon} />)}
                </SkewLeftDiv>
                <NormDiv>
                    {selectedPokemon.pokeID? <PokemonImage pokeID={selectedPokemon.pokeID}/> : null}
                </NormDiv>
                <SkewRightDiv>

                </SkewRightDiv>
            </PokemonListImageSummaryContainer>
            <PokemonButtons />
        </div>
    )
}

export default PokemonContainer

const PokemonListImageSummaryContainer = styled.div`
    display: flex;
    height: 650px
`

const SkewLeftDiv = styled.div`
    transform: skew( 0deg, 175deg);
    transition: all .5s;
`

const SkewRightDiv = styled.div`

`

const NormDiv = styled.div`
    margin-top: 70px;
    margin-left: 50px
`