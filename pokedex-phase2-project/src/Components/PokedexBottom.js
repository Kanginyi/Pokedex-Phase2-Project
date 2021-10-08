import React, {useState, useEffect} from 'react';
import PokemonItem from './PokemonItem';
import SearchBar from './SearchBar';
import styled from "styled-components";
import {List, AutoSizer, CellMeasurer, CellMeasurerCache} from "react-virtualized";

import "../index.css"

function PokedexBottom({setPokeId}) {
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

    // if (filterPokemon.length) {
        return (
            <div>
                <SearchBar search={search}/>
                {filterPokemon.length ? 
                    <PokeScroller style={{width: "100%", height: "52vh"}}>
                        <AutoSizer>
                            {({width, height}) => (
                            <List
                                id="poke-list-parent"
                                width={width}
                                height={height}
                                rowHeight={100}
                                rowCount={filterPokemon.length}
                                rowRenderer={({key, index, style}) => {
                                    const pokemon = filterPokemon[index];

                                    return (
                                        <div id="poke-list" key={key} style={style}>
                                            <PokemonItem id={pokemon.id} name={pokemon.name.eng} setPokeId={setPokeId}/>
                                        </div>
                                    );
                                }}
                            />
                            )}
                        </AutoSizer>
                    </PokeScroller> : 
                    <h1>No Found Data</h1>
                }
            </div>
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
