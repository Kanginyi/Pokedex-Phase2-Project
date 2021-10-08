import React from 'react';
import styled from "styled-components";

import "../index.css";

function PokemonItem({setPokeId, id, name, image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/240px-Pok%C3%A9_Ball_icon.svg.png"}) {

    return (
        // <>
        //     <li className="poke-Li" onClick={() => setPokeId(id)}>
        //         <span id="number-left" className="list-text">{id}</span>
        //         <span id="name-right" className="list-text"> | {name}</span>
        //         <img
        //             className="img-balance"
        //             src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/${parseInt(id)}.png`}
        //             alt={`Pokemon ` + id + `: ` + name}
        //             title={`Pokemon ` + id + `: ` + name}
        //             width="50px"
        //             height="50px"
        //         />
        //     </li>
        //     <img 
        //         id="poke-arrow"
        //         style={{display: 'none'}}
        //         src="https://static.thenounproject.com/png/74837-200.png"
        //         alt="Left Arrow"
        //         width="50px"
        //         height="50px"
        //     />
        // </>
        <CardPoke onClick={() => setPokeId(id)}>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${parseInt(id)}.png`}/>
            {/* <hr/> */}
            <BottomInfo>
                <span id="number-left" className="list-text">{id}</span>
                    <span id="name-right" className="list-text"> | {name}</span>
                    {/* <img
                        className="img-balance"
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/${parseInt(id)}.png`}
                        alt={`Pokemon ` + id + `: ` + name}
                        title={`Pokemon ` + id + `: ` + name}
                        width="50px"
                        height="50px"
                    /> */}
            </BottomInfo>
        </CardPoke>
    );
}

export default PokemonItem;

const CardPoke = styled.div`
    border : 2px solid black;
    padding: 15px;
    margin-left: 5px;
    margin-right: 5px;
    align-items: center;
    transition: all 0.5s;
    height:50%;
    box-shadow: 10px 7.5px rgba(3, 3, 3, 0.15);
    background-color: #fde8e8;
    &:hover{
        transform: scale(1.03);
        background-color: #e18c8c;
    }
    & img {
        width: auto;
        height: 70%;
    }
`

const BottomInfo = styled.div`
    display: flex;
`