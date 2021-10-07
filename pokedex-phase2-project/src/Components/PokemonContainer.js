import React, {useState} from 'react'
import Pokemon from './Pokemon'
import PokemonHeader from './PokemonHeader'
import PokemonButtons from './PokemonButtons'
import PokemonImage from './PokemonImage'
import PokemonSummary from './PokemonSummary'
import styled from 'styled-components'


const PokemonContainer = () => {

    const [highestStat, setHighestStat] = useState(0)
    const [selectedPokemon, setSelectedPokemon] = useState({
        id: null,
        pokeID: null //use this number for end of url
    })
    const [showSummary, setShowSummary] = useState(false)
    
    const changeHighestStat = (num) => {
        if (num > highestStat) {
            setHighestStat(num)
        }
    }


    
    ///CHANGE THIS LATER FOR JSON FILE
    const [savePoke, setSavePoke] = useState([
        {
            id: 1,
            nickname: "A",
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
            nickname: "B",
            pokeID: 10078,
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
            nickname: "C",
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
            nickname: "D",
            pokeID: 10007,
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
            nickname: "E",
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
            nickname: "F",
            pokeID: 10044,
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
    ])

    return (
        <div>
            <PokemonListImageSummaryContainer>
                <SkewLeftDiv>
                    <PokemonHeader />
                    {savePoke.map(pokemon => <Pokemon changeHighestStat={changeHighestStat} pokemon={pokemon} key={pokemon.id} selectedPokemon={selectedPokemon} setSelectedPokemon={setSelectedPokemon} setShowSummary={setShowSummary} />)}
                </SkewLeftDiv>
                <NormDiv>
                    {selectedPokemon.pokeID? <PokemonImage pokeID={selectedPokemon.pokeID}/> : null}
                </NormDiv>
                <SkewRightDiv>
                    {showSummary ? <PokemonSummary highestStat={highestStat} savePoke={savePoke} setSavePoke={setSavePoke} selectedPokemon={selectedPokemon} hlPokemon={savePoke.find(pokemon => pokemon.id === selectedPokemon.id)}/> : null}
                </SkewRightDiv>
            </PokemonListImageSummaryContainer>
            <PokemonButtons setShowSummary={setShowSummary} showSummary={showSummary} selectedPokemon={selectedPokemon}/>
        </div>
    )
}

export default PokemonContainer

const PokemonListImageSummaryContainer = styled.div`
    display: flex;
    height: 650px
`

const SkewLeftDiv = styled.div`
    margin-top: 20px;
    transform: skew( 0deg, 175deg);
    transition: all .5s;
`

const SkewRightDiv = styled.div`
    margin-top: 136px;
    margin-left: 60px;
    transform: skew( 0deg, 5deg);
    transition: all .5s;
`

const NormDiv = styled.div`
    margin-top: 100px;
    margin-left: 110px
`