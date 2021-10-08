import React, {useState} from 'react'
import styled, { keyframes } from 'styled-components'

const PokemonImage = ({pokeID}) => {

    const [jump, setJump] = useState(0)
    return (
        <>
            <img 
                className ="officialImage"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeID}.png`}
                alt="Pokemon" 
                onClick={() => setJump(1)}
                onAnimationEnd={() => setJump(0)}
                jump={jump}
            />
        </>
    )
}

export default PokemonImage

// const spriteMovement = keyframes`
//     0% {transform: translateY(0px)};
//     25% {transform: translateY(-50px)};
//     50% {transform: translateY(0px)};
//     75% {transform: translateY(-4px)};
//     100% {transform: translateY(0px)};
// `

// const PokeOfficialImage = styled.div`
//     & img:hover, img:focus {
//     animation-name: ${spriteMovement};
//     animation-duration: 1s;
//     animation-iteration-count: 1;
//     }
// `

