import React, {useState, useEffect} from 'react'
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
    const [savePoke, setSavePoke] = useState([])
    const [showSummary, setShowSummary] = useState(false)
    
    const changeHighestStat = (num) => {
        if (num > highestStat) {
            setHighestStat(num)
        }
    }

    useEffect(() => {
        fetch("http://localhost:4000/team")
        .then(resp => resp.json())
        .then(data => setSavePoke(data))
    }, [])

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
                    {showSummary ? <PokemonSummary setSelectedPokemon={setSelectedPokemon} highestStat={highestStat} savePoke={savePoke} setSavePoke={setSavePoke} selectedPokemon={selectedPokemon} hlPokemon={savePoke.find(pokemon => pokemon.id === selectedPokemon.id)}/> : null}
                </SkewRightDiv>
            </PokemonListImageSummaryContainer>
            <PokemonButtons setShowSummary={setShowSummary} showSummary={showSummary} selectedPokemon={selectedPokemon} setSavePoke={setSavePoke} setSelectedPokemon={setSelectedPokemon} savePoke={savePoke}/>
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
    // transform: skew( 0deg, 175deg);
    transition: all .5s;
`

const SkewRightDiv = styled.div`
    margin-top: 120px;
    margin-left: 60px;
    // transform: skew( 0deg, 5deg);
    transition: all .5s;
`

const NormDiv = styled.div`
    margin-top: 100px;
    margin-left: 110px
`