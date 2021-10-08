import React, {useState, useEffect} from 'react';
import PokedexTop from './PokedexTop';
import PokedexBottom from './PokedexBottom';

import "../index.css"


function PokedexContainer({savePoke, setSavePoke}) {
    const [pokeId, setPokeId] = useState(null);
    const [malePoke, setMalePoke] = useState([])
    const [femalePoke, setFemalePoke] = useState([])
    const [genderlessPoke, setGenderlessPoke] = useState([])
    console.log(genderlessPoke)

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/gender/male/')
        .then(resp => resp.json())
        .then(data => setMalePoke(data))
    }, [])

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/gender/female/')
        .then(resp => resp.json())
        .then(data => setFemalePoke(data))
    }, [])

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/gender/genderless/')
        .then(resp => resp.json())
        .then(data => setGenderlessPoke(data))
    }, [])

    return (
        <div>
            {pokeId ? <PokedexTop pokeId={pokeId} savePoke={savePoke} setSavePoke={setSavePoke} malePoke={malePoke} femalePoke={femalePoke} genderlessPoke={genderlessPoke} /> : null}
            <PokedexBottom setPokeId={setPokeId}/>
            <hr />
        </div>
    );
}

export default PokedexContainer;
