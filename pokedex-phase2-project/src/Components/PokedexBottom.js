import React, {useState, useEffect} from 'react';
import PokemonItem from './PokemonItem';
import SearchBar from './SearchBar';
import styled from "styled-components";
import {FixedSizeList as List} from 'react-window';



import "../index.css"

function PokedexBottom({setPokeId, pokeId}) {
    const [pokemonData, setPokemonData] = useState([]);
    
    //Search Aspects
    const [searchValue, setSearchValue] = useState("");

    function search(e) {
        setSearchValue(e.target.value);
    }
    
    useEffect(() => {
        fetch("http://localhost:4000/pokemons")
            .then(resp => resp.json())
            .then(data => setPokemonData(data));
    }, []);

    const filterPokemon = searchValue === "" ? pokemonData : pokemonData.filter(pokemon => pokemon.name.eng.toLowerCase().includes(searchValue.toLowerCase()));

    const individualPokemon = ({ index, style, key }) => {
        const pokemon = filterPokemon[index];
        return (
            <div id="poke-list" key={key} style={style}>
                <PokemonItem id={pokemon.id} name={pokemon.name.eng} setPokeId={setPokeId}/>
            </div>
        )
    };
    
        return (
            <BottomDiv pokeId={pokeId}>
                <SearchBar search={search}/>
                <div>
                {filterPokemon.length ?
                            <List
                                id="poke-list-parent"
                                width={window.innerWidth}
                                height={240}
                                itemCount={filterPokemon.length}
                                itemSize={300}
                                layout="horizontal"
                            >
                                {individualPokemon}
                            </List>
                    :<h1>No Found Data</h1>
                }
                </div>
            </BottomDiv>
        )
    // } else {
    //     return <>
    //         <SearchBar search={SearchBar} />
    //         <h1>No Found Data</h1>
    //     </>
    // }
}

export default PokedexBottom;

const PokeScroller = styled.div `
    overflow: auto;
    & ::-webkit-scrollbar {
        display: none;
    }
    ::-webkit-scrollbar {
        display: none;
    }
`

const BottomDiv = styled.div `
    margin-top: ${props => props.pokeId ? null : "480px"}
`