import React from 'react'
import styled from 'styled-components'
import logo from '../pokeballLogo.png'

const PokemonHeader = () => {
    return (
        <Header>
            <img src={logo} alt="pokemonLogo"/>
            <h1>POKÉMON</h1>
        </Header>
    )
}

export default PokemonHeader

const Header = styled.div`
    display: flex;
    height: 100px;
    align-items: center;
    & img{
        width: auto;
        height: 100%;
    }
    & h1{
        justify-content: center;
        padding: 0px;
        margin-left: 10px;
        margin-bottom: 45px;
    }
`