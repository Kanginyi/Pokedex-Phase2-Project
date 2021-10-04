import React, {useState, useEffect} from 'react'


const Pokemon = ({pokemon}) => {
    const [pokeAPI, setPokeAPI] = useState=[]

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.id}`)
        .then(resp => resp.json())
        .then(data => (setPokeAPI(data)))
    }, [])

    const base = {
        hp : pokeAPI.stats.find(stat => stat.name === "hp")["base_stat"],
        attack : pokeAPI.stats.find(stat => stat.name === "attack")["base_stat"],
        defense : pokeAPI.stats.find(stat => stat.name === "defense")["base_stat"],
        specialAttack : pokeAPI.stats.find(stat => stat.name === "special-attack")["base_stat"],
        specialDefense : pokeAPI.stats.find(stat => stat.name === "special-defense")["base_stat"],
        speed : pokeAPI.stats.find(stat => stat.name === "speed")["base_stat"],
    }

    //const pokeGenerations = ["generation-viii", "generation-vii", "generation-vi", "generation-v", "generation-iv", "generation-iii", "generation-ii", "generation-i"]
    const pokeGenerations = (Object.keys(pokeAPI.sprites.versions).filter(generation => "icons" in generation)).reverse()
    const spriteImg = pokeGenerations.find((generation) => generation["icons"]["front_default"])["icons"]["front_default"]

    const hp = Math.floor(0.01*(2*base.hp+pokemon.IV.hp+Math.floor(0.25 * pokemon.EV.hp))*pokemon.level)+pokemon.level + 10

    return (
        <div>
            <div>
                {/* SPRITE */}
                <img src={spriteImg}/>
            </div>
            <div>
                {/* top div: display name and gender */}
                <div> 
                    <div>
                        {pokeAPI.name}
                    </div>
                    <div>
                        {pokemon.gender? (pokemon.gender === "male"? "♂" : "♀") :null}
                    </div>
                </div>
                {/* middle div: display HP bar */}
                <div>
                    <hr style={{
                        color: "green"
                    }}
                    />
                </div>
                {/* bottom div: display HP and level */}
                <div>
                    <div>
                        <h5>{hp}/{hp}</h5>
                    </div>
                    <div>
                        <h5>Lv. {pokemon.level}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pokemon
