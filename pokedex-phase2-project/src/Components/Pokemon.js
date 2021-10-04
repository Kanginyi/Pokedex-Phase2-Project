import React, {useState, useEffect} from 'react'


const Pokemon = ({pokemon}) => {
    const [pokeAPI, setPokeAPI] = useState(null)

    useEffect(() => {
        console.log(pokemon)
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

    const pokeGenerations = (Object.keys(pokeAPI.sprites.versions).filter(generation => "icons" in pokeAPI.sprites.versions[generation])).reverse()
    const spriteImg = pokeAPI.sprites.versions[pokeGenerations.find(generation => pokeAPI.sprites.versions[generation].icons.front_default)].icons.front_default
    console.log(spriteImg)

    return (
        <div className="pokeTeamContainer">
            <div className="pokeTeamSprite">
                {/* SPRITE */}
                <img src={spriteImg} alt="Sprite"/>
            </div>
            <div className="pokeTeamInfo">
                {/* top div: display name and gender */}
                <div  className="pokeTeamNameGender"> 
                    <div>
                        {pokeAPI.name[0].toUpperCase() + pokeAPI.name.slice(1)}
                    </div>
                    <div className="pokeTeamGender">
                        {pokemon.gender? (pokemon.gender === "male"? "♂" : "♀") :null}
                    </div>
                </div>
                {/* middle div: display HP bar */}
                <div className="pokeTeamHpBar"></div>
                {/* bottom div: display HP and level */}
                <div className="pokeTeamHPLvl">
                    <div>
                        {hp}/{hp}
                    </div>
                    <div className="pokeTeamLevel">
                        {"Lv." + pokemon.level}
                    </div>
                </div>
            </div>
        </div>
    )
    }
    else {
        return null
    }
}

export default Pokemon
