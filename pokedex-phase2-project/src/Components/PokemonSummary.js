import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import pokeball from '../pokeball.png'
import PokemonAbility from './PokemonAbility'
import PokemonRadarChart from './PokemonRadarChart'
import PokemonModify from './PokemonModify'
//Types
import dark from '../Poketypes/dark.png'
import dragon from '../Poketypes/dragon.png'
import electric from '../Poketypes/electric.png'
import fairy from '../Poketypes/fairy.png'
import fighting from '../Poketypes/fighting.png'
import fire from '../Poketypes/fire.png'
import flying from '../Poketypes/flying.png'
import ghost from '../Poketypes/ghost.png'
import grass from '../Poketypes/grass.png'
import ground from '../Poketypes/ground.png'
import ice from '../Poketypes/ice.png'
import normal from '../Poketypes/normal.png'
import poison from '../Poketypes/poison.png'
import psychic from '../Poketypes/psychic.png'
import rock from '../Poketypes/rock.png'
import steel from '../Poketypes/steel.png'
import water from '../Poketypes/water.png'
import bug from '../Poketypes/bug.png'
//
import "../tabs.css"

const PokemonSummary = ({hlPokemon, selectedPokemon, setSavePoke, savePoke, highestStat, setSelectedPokemon}) => {
    const [toggleState, setToggleState] = useState(1)
    const [pokeAPI, setPokeAPI] = useState(null)

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${hlPokemon.pokeID}`)
        .then(resp => resp.json())
        .then(data => (setPokeAPI(data)))
    }, [selectedPokemon])

    if (pokeAPI) {

    const toggleTab = (index) => {
        setToggleState(index)
    }

    function switchType(type) {
        switch(type){
            case 'bug' : return bug;
            case 'dark': return dark;
            case 'dragon': return dragon;
            case 'electric': return electric;
            case 'fairy': return fairy;
            case 'fighting': return fighting;
            case 'fire': return fire;
            case 'flying': return flying;
            case 'ghost': return ghost;
            case 'grass': return grass;
            case 'ground': return ground;
            case 'ice': return ice;
            case 'normal': return normal;
            case 'poison': return poison;
            case 'psychic': return psychic;
            case 'rock': return rock;
            case 'steel': return steel;
            case 'water': return water;
            default: return null;
        }
    }


    return (
        <div className="container">
            <div className="block-tabs">
                <div className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>Summary</div>
                <div className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>Stats</div>
                <div className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)}>Modify</div>
            </div>

            <div className="content-tabs">
                <div className={toggleState === 1 ? "content  active-content" : "content"}>
                    <BasicInfo>
                        <NameLevel>
                            <Pokeball>
                                <img src={pokeball} alt="Pokeball"/>
                            </Pokeball>
                            <div>
                                <p>{hlPokemon.nickname}</p>
                            </div>
                            <div>
                                <p>Lv. {hlPokemon.level}</p>
                            </div>
                        </NameLevel>
                    </BasicInfo>
                    <hr />
                    <Pokemon>
                        <div>
                            <p>Pokémon</p>
                        </div>
                        <VerticalLine>
                        </VerticalLine>
                        <div>
                            <p>{pokeAPI.name[0].toUpperCase() + pokeAPI.name.slice(1)}</p>
                        </div>
                    </Pokemon>
                    <hr />
                    <Type>
                        <p>Type</p>
                        <VerticalLine>
                        </VerticalLine>
                        <TypeLogo>
                            <img src={switchType(pokeAPI.types[0].type.name)} alt="Type"/>
                            {pokeAPI.types.length === 2 ? <img src={switchType(pokeAPI.types[1].type.name)} alt="Type"/> : null}
                        </TypeLogo>
                    </Type>
                    <hr />
                    <Ability>
                        <p>Ability</p>
                        <VerticalLine></VerticalLine>
                        <div>
                            <PokemonAbility ability={pokeAPI.abilities[0].ability.name} />
                        </div>
                    </Ability>
                </div>
                
                <div className={toggleState === 2 ? "content  active-content" : "content"}>
                    <PokemonRadarChart hlPokemon={hlPokemon} highestStat={highestStat} />
                </div>

                <div className={toggleState === 3 ? "content  active-content" : "content"}>
                    <PokemonModify setSavePoke={setSavePoke} hlPokemon={hlPokemon} savePoke={savePoke} setSelectedPokemon={setSelectedPokemon} />
                </div>
            </div>
        </div>
    )
    }
    else {
        return (
            null
        )
    }
}

export default PokemonSummary

const BasicInfo = styled.div`
    height: 75px;

`
const NameLevel = styled.div`
    display: flex;
    justify-content: space-around;
`

const Pokeball = styled.div`
    display: flex;
    align-items: center;
`

const Pokemon = styled.div`
    display: flex;
    justify-content: space-around;
    height: 100px;
`

const VerticalLine = styled.div`
    width: 1px;
    background-color: black; 
    height: 100px; 
    float: left;
    display: flex;
    align-items: center;
`

const Type = styled.div`
    display: flex;
    justify-content: space-around;
    align-items:center;
`

const TypeLogo = styled.div`
    position: relative;
    display:flex;
    width: 250px;
    justify-content: space-around;
    & img {
        width: 75px;
        height: 100%
    }
`

const Trainer = styled.div`
`

const Ability = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-around;
`