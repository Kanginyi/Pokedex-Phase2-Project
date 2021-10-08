import React from 'react'
import backArrow from '../backArrow_50px.png'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import Popup from 'reactjs-popup'

const PokemonButtons = ({setShowSummary, showSummary, selectedPokemon, setSavePoke, setSelectedPokemon, savePoke}) => {

    const onDeleteHandler = (pokemonID) => { //need to clean this 

        const deletedArray = [...savePoke].filter(pokemon => pokemon.id !== pokemonID)

        fetch(`http://localhost:4000/team/${pokemonID}`, {
            method: "DELETE"
        })
        .then(resp => resp.json())
        .then(() => {
            setSavePoke(deletedArray)
            setSelectedPokemon(selectedPokemon => {
                return ({
                    ...selectedPokemon,
                    id: null,
                    pokeID: null,
                })
            })
        })
        
    }

    return (
        <ButtonBar>
            <Link to="/">
                <img src={backArrow} alt="Back to Home"/>
            </Link>
            <SummaryButton disabled={selectedPokemon.id? false : true} showSummary={showSummary} selectedPokemon={selectedPokemon.id} onClick={()=>setShowSummary(showSummary => !showSummary)}>Summary</SummaryButton>
            {/* <DeleteButton disabled={selectedPokemon.id? false : true} selectedPokemon={selectedPokemon.id} onClick={onClickHandler}>Release</DeleteButton> */}
            <Popup 
                modal 
                nested 
                trigger={<DeleteButton disabled={selectedPokemon.id? false : true} selectedPokemon={selectedPokemon.id} >Release</DeleteButton>}
            >
            {close => (
                <Modal>
                    <div className="header"> Are you sure you want to release this Pokémon? </div>
                    {/* <div className="content">{' '}YA YEET</div> */}
                    <Actions>
                        <ActionsButton onClick={() => {onDeleteHandler(selectedPokemon.id); close()}}> Yes </ActionsButton>

                        <ActionsButton onClick={() => close()}>
                        No
                        </ActionsButton>
                    </Actions>
                </Modal>
    )}
            </Popup>
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

const DeleteButton = styled.button`
    font-weight: 700;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid black;
    border-radius: 25px;
    cursor: pointer;
    background: red;
    color: white;
    transition: all 0.5s;
    opacity: ${props => props.selectedPokemon ? 1: 0.3};
    `

const Modal = styled.div`
    font-size: 40px;
    background-color: #e5e5e5;
    border: 2px solid black;
    border-radius: 25px;
    size: b5;
    text-align: center;
    padding: 20px;
`

const Actions = styled.div`
    width: 100%;
    padding: 10px 5px;
    margin: auto;
    text-align: center;
    display: flex;
    justify-content: space-evenly;
`

const ActionsButton = styled.button`
    padding: 15px;
    border-radius: 12px;
    font-size: 15px;
    border: 1px solid black;
    cursor: pointer;
`