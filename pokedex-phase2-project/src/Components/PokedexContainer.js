import React, {useState} from 'react';
import PokedexTop from './PokedexTop';
import PokedexBottom from './PokedexBottom';

import "../index.css"


function PokedexContainer() {
    const [pokeId, setPokeId] = useState(null);

    return (
        <div>
            {pokeId ? <PokedexTop pokeId={pokeId}/> : null}
            <PokedexBottom setPokeId={setPokeId}/>
            <hr />
        </div>
    );
}

export default PokedexContainer;
