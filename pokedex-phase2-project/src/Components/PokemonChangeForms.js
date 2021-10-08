import React from 'react'
import styled from 'styled-components'
import unknownSprite from '../unknown_sprite.png' 

const PokemonChangeForms = ({pokeObj, setFormData}) => {
    const getLastNumber = (url) => {
        const matches = url.match(/\d+/g);
        return matches[matches.length - 1];
    }

    const id = getLastNumber(pokeObj.pokemon.url)

    const onClickImage = () => {
        setFormData(formData => {
            return ({
                ...formData,
                "pokeID" : id
            })
        })
    }
    
    return (
        <ImageContainer>
            <img onClick={onClickImage} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}/>
        </ImageContainer>
    )
}

export default PokemonChangeForms

const ImageContainer = styled.div`
    display: flex;
    height: 250px;
    align-items: center;
    margin-left: 20px;
    & img{
        margin: 15px;
        width: auto;
        height: 100%;
        &:hover{
            transform: scale(1.03)
        }
    }
`

        // border:  ${props => (props.pokeID === props.formID ? "1px solid black": null)};
