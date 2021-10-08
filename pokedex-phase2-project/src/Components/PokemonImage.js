import React from 'react'
// import styled from 'styled-components'

const PokemonImage = ({pokeID}) => {



    return (
        <>
            <img alt="Pokemon" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeID}.png`}/>
        </>
    )
}

export default PokemonImage
