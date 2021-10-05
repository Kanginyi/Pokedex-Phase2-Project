import React from 'react'
import backArrow from '../backArrow_50px.png'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const PokemonButtons = () => {
    return (
        <ButtonBar>
            <Link to="/">
                <img src={backArrow} alt="Back to Home"/>
            </Link>
        </ButtonBar>
    )
}

export default PokemonButtons

const ButtonBar = styled.div`
    display: flex;
    width: 100%;
    margin-top: 50px;
    & a {
        margin-left: 25px
    }
`