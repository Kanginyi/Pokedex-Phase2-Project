import React from 'react'
import styled, { keyframes } from 'styled-components'

const PokemonImage = ({pokeID}) => {



    return (
        <PokeImage>
            <img alt="Pokemon" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeID}.png`}/>
        </PokeImage>
    )
}

export default PokemonImage

const spriteMovement = keyframes`
    0% {transform: translateY(0px)};
    25% {transform: translateY(-50px)};
    50% {transform: translateY(0px)};
    75% {transform: translateY(-4px)};
    100% {transform: translateY(0px)};
`

const PokeImage = styled.div`
    & img {
    animation-name: ${spriteMovement};
    animation-duration: 0.5s;
    animation-iteration-count: 1;
    }
`

