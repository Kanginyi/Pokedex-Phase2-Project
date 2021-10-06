import React from 'react'
import backArrow from '../backArrow_50px.png'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const PokemonButtons = ({setShowSummary, showSummary, selectedPokemon}) => {

    console.log(selectedPokemon.id)

    return (
        <ButtonBar>
            <Link to="/">
                <img src={backArrow} alt="Back to Home"/>
            </Link>
            <SummaryButton disabled={selectedPokemon.id? false : true} showSummary={showSummary} selectedPokemon={selectedPokemon.id} onClick={()=>setShowSummary(showSummary => !showSummary)}>Summary</SummaryButton>
        </ButtonBar>
    )
}

export default PokemonButtons

const ButtonBar = styled.div`
    display: flex;
    width: 100%;
    margin-top: 50px;
    align-items: center;
    & a {
        margin-left: 25px;
        cursor: pointer;
    }
`

const SummaryButton = styled.button`
    font-weight: 700;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid black;
    border-radius: 25px;
    cursor: pointer;
    background: ${props => props.showSummary ? "black" : "#ffffff00"};
    color: ${props => props.showSummary ? "white" : "black"};
    transition: all 0.5s;
    opacity: ${props => props.selectedPokemon ? 1: 0.3};
`