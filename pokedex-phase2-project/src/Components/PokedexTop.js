import React, {useState, useEffect} from 'react';

function PokedexTop({pokeId, savePoke, setSavePoke, malePoke, femalePoke, genderlessPoke}) {
    //Gets the name from our db.json file
    const [pokeName, setPokeName] = useState("");

    useEffect(() => {
        fetch("http://localhost:4000/pokemons")
            .then(resp => resp.json())
            .then(data => setPokeName(data.find(element => parseInt(element.id) === parseInt(pokeId)).name.eng));
    }, [pokeId]);
    //Donezo

    const [pokeInfo, setPokeInfo] = useState(null);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${parseInt(pokeId)}`)
            .then(resp => resp.json())
            .then(data => setPokeInfo(data));
    }, [pokeId]);

    const [pokeDesc, setPokeDesc] = useState(null);
    //Pull the data down for desc

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon-species/${parseInt(pokeId)}`)
            .then(resp => resp.json())
            .then(data => setPokeDesc(
                data["flavor_text_entries"]
                    .find(element => element.language.name === "en")["flavor_text"]
                    .replace(/\n/g, " ")
                    .replace(/\f/g, " ")
                    .replace("POKéMON", "Pokémon")))
    }, [pokeId]);

    //Donezo

    //Pull Genus information HAD TO COMMENT IT OUT SO MY SHIT DON'T GO BOOMA
    const [pokeGenus, setPokeGenus] = useState("");
    const [pokeVarieties, setPokeVarieties] = useState([])

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon-species/${parseInt(pokeId)}`)
        .then(resp => resp.json())
        .then(data => {
            setPokeGenus(data.genera.find(element => element.language.name === "en").genus);
            setPokeVarieties(data.varieties);
        });
    }, [pokeId])
    //Donezo

    const capitalize = (string) => {
        let words;

        if (string.indexOf("-")) {
            words = string.split("-");
        } else {
            words = [string];
        }
        return words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    }

    

    const addTeamHandler = () => {
        const teamID = savePoke.length+1;
        //check genderless
        const genderless = genderlessPoke["pokemon_species_details"].find(pokemon => pokemon.pokemon_species.url === `https://pokeapi.co/api/v2/pokemon-species/${parseInt(pokeId)}/`) ? true:false;
        const female = femalePoke["pokemon_species_details"].find(pokemon => pokemon.pokemon_species.url === `https://pokeapi.co/api/v2/pokemon-species/${parseInt(pokeId)}/`) ? true:false;
        const male = malePoke["pokemon_species_details"].find(pokemon => pokemon.pokemon_species.url === `https://pokeapi.co/api/v2/pokemon-species/${parseInt(pokeId)}/`) ? true:false;

        const pokeGender = 
        female && !male ? "female" : 
        male && !female ? "male" : 
        !male && !female ?  null:
        Math.round(Math.random()) === 1? "male":"female" 

        const nature = ['hardy','lonely','brave','adamant','naughty','bold','docile','relaxed','impish','lax','timid','hasty','serious','jolly','naive','modest','mild','quiet','bashful','rash','calm','gentle','sassy','careful','quirky'][Math.floor(Math.random() * 25)]

        const pokeObj={
            id : teamID,
            nickname : pokeName,
            dexID : parseInt(pokeId),
            pokeID: parseInt(pokeId),
            level: Math.floor(Math.random() * 100) + 1,
            gender: pokeGender,
            nature: nature,
            varieties: pokeVarieties,
            IV: {
                "hp": Math.floor(Math.random() * 32),
                "attack": Math.floor(Math.random() * 32),
                "defense": Math.floor(Math.random() * 32),
                "specialAttack": Math.floor(Math.random() * 32),
                "specialDefense": Math.floor(Math.random() * 32),
                "speed": Math.floor(Math.random() * 32),
            },
            EV: {
                "hp": 0,
                "attack": 0,
                "defense": 0,
                "specialAttack": 0,
                "specialDefense": 0,
                "speed": 0,
            }
        }
        setSavePoke(savePoke => [...savePoke, pokeObj])
        fetch('http://localhost:4000/team', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(pokeObj)
        })
    }


    if (pokeInfo) {
        return (
            <>
                <div id="pokedex-info-container">
                    <div className="pokedex-info-box">
                        {pokeId} | {pokeName} <br/>
                        <img src={pokeInfo.sprites.other["official-artwork"]["front_default"]} alt={pokeInfo.name} title={pokeInfo.name} width="175px" height="175px"/> <br/>
                        {/* Map over array, destructure the type, call that shit inside of our span */}
                        <div className="type-container">
                            {pokeInfo.types.map(({type}) => {
                                return <span key={type.name} className={`type ${type.name}`}>{type.name.charAt(0).toUpperCase() + type.name.slice(1)}</span>
                            })}
                        </div>
                        <br/>
                            <span><strong><u>Abilities:</u></strong></span>
                        <div>
                            {pokeInfo.abilities.map(({ability}, index) => {
                                if (index === 0) {
                                    return <span key={ability.name} className="ability-name">{capitalize(ability.name)}</span>
                                } else {
                                    return (
                                        <div key={ability.name}>
                                            {/* <span> | </span> */}
                                            <span className="ability-name">{capitalize(ability.name)}</span>
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    </div>
                    <div className="pokedex-info-box">
                        <h3>{pokeGenus}</h3>
                        <span><strong>Height:</strong> {pokeInfo.height/10} m</span><br/>
                        <span><strong>Weight:</strong> {[pokeInfo.weight/10]} kg</span>
                        <p><strong>Description: </strong>{pokeDesc}</p>
                    </div>
                </div>
                <button id="add-to-team-button" disabled={savePoke.length === 6? true:false} onClick={addTeamHandler}>Add Pokémon to Team</button>
                <hr /><br />
            </>
        );
    } else {
        return null;
    }
}

export default PokedexTop;