import React, {useState, useEffect} from 'react'
import styled, { keyframes} from 'styled-components'

const Pokemon = ({pokemon, setSelectedPokemon, selectedPokemon, setShowSummary}) => {
    const [pokeAPI, setPokeAPI] = useState(null)

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.pokeID}`)
        .then(resp => resp.json())
        .then(data => (setPokeAPI(data)))
    }, [])

    if (pokeAPI) {
    
    //Pokemon get Base Stats
    const pokeStatsKeys = Object.keys(pokeAPI.stats)
    const findStatNum = (statName) => {
        return pokeStatsKeys.find(num => pokeAPI.stats[num].stat.name === statName)
    }
    const base = {
        hp : pokeAPI.stats[findStatNum('hp')].base_stat,
        attack : pokeAPI.stats[findStatNum('attack')].base_stat,
        defense : pokeAPI.stats[findStatNum('defense')].base_stat,
        specialAttack : pokeAPI.stats[findStatNum('special-attack')].base_stat,
        specialDefense : pokeAPI.stats[findStatNum('special-defense')].base_stat,
        speed : pokeAPI.stats[findStatNum('speed')].base_stat,
    }
    const hp = Math.floor(0.01*(2*base.hp+pokemon.IV.hp+Math.floor(0.25 * pokemon.EV.hp))*pokemon.level)+pokemon.level + 10

    // const pokeGenerations = (Object.keys(pokeAPI.sprites.versions).filter(generation => "icons" in pokeAPI.sprites.versions[generation])).reverse()
    // const spriteImg = pokeAPI.sprites.versions[pokeGenerations.find(generation => pokeAPI.sprites.versions[generation].icons.front_default)].icons.front_default
    const spriteImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/${pokemon.pokeID}.png`


    const onClickHandler = () => {
        if (selectedPokemon.id === pokemon.id) {
            setSelectedPokemon({
                id: null,
                pokeID: null
            })
            setShowSummary(false)
        }
        else {
            setSelectedPokemon({
                id: pokemon.id,
                pokeID: pokemon.pokeID
            })
        }
    }

    return (
        <PokeTeamContainer selectedPokemon={selectedPokemon.id} pokeID={pokemon.id} onClick={onClickHandler}>
            {selectedPokemon.id === pokemon.id? 
            <PokeTeamSpriteSelected>
                <img src={spriteImg} alt="Sprite"/>
            </PokeTeamSpriteSelected> 
            :  
            <PokeTeamSprite>
                <img src={spriteImg} alt="Sprite"/>
            </PokeTeamSprite>}
            <PokeTeamInfo>
                {/* top div: display name and gender */}
                <PokeTeamNameGender> 
                    <PokeTeamName>
                        {pokeAPI.name[0].toUpperCase() + pokeAPI.name.slice(1)}
                    </PokeTeamName>
                    <PokeTeamGender>
                        {pokemon.gender? (pokemon.gender === "male"? "♂" : "♀") :null}
                    </PokeTeamGender>
                </PokeTeamNameGender>
                {/* middle div: display HP bar */}
                <PokeTeamHpBar></PokeTeamHpBar>
                {/* bottom div: display HP and level */}
                <PokeTeamHPLvl>
                    <div>
                        {hp}/{hp}
                    </div>
                    <PokeTeamLevel>
                        {"Lv." + pokemon.level}
                    </PokeTeamLevel>
                </PokeTeamHPLvl>
            </PokeTeamInfo>
        </PokeTeamContainer>
    )
    }
    else {
        return null
    }
}

export default Pokemon

const PokeTeamContainer = styled.div(({selectedPokemon, pokeID}) =>
`
    display: flex;
    border: 5px hidden;
    width: 315px;
    border-radius: 50px;
    background: ${selectedPokemon === pokeID ? "black":"white"};
    color:  ${selectedPokemon === pokeID ? "white":"black"};
    padding: 2px;
    margin-left: 42px;
    margin-top: 15px;
    margin-bottom: 15px;
    cursor: pointer;
    transition: all 0.5s;
    &:hover {
        transform: scale(1.03);
    }
`)

const spriteMovement = keyframes`
    0% {transform: translateY(0px)};
    50% {transform: translateY(-3px)};
    100% {transform: translateY(0px)};
`

const spriteMovementSelected = keyframes`
    0% {transform: translateY(0px)};
    50% {transform: translateY(-8px)};
    100% {transform: translateY(0px)};
`

const PokeTeamSprite = styled.div`
    & img {
        width: 100%;
        animation-name: ${spriteMovement};
        animation-duration: 0.5s;
        animation-iteration-count: infinite;
    }
`

const PokeTeamSpriteSelected = styled.div`
    & img {
        width: 100%;
        animation-name: ${spriteMovementSelected};
        animation-duration: 0.5s;
        animation-iteration-count: infinite;
    }
`

const PokeTeamName = styled.div`
`

const PokeTeamInfo = styled.div `
    wdith: 225px
`

const PokeTeamNameGender = styled.div `
    display: flex;
    justify-content: space-between;
    font-size: 20px;
`

const PokeTeamGender =styled.div`
    margin-right: 15px
`

const PokeTeamHPLvl = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 20px;
`

const PokeTeamHpBar = styled.div`
    background: green;
    border: 1px solid black;
    width:200px;
    height:15px
`

const PokeTeamLevel =styled.div`
    margin-right: 15px
`