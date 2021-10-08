import React from 'react';

import "../index.css";

function Pokemon({setPokeId, id, name, image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/240px-Pok%C3%A9_Ball_icon.svg.png"}) {

    return (
        <> 
            <li className="poke-Li" onClick={() => setPokeId(id)}>
                <span id="number-left" className="list-text">{id}</span>
                <span id="name-right" className="list-text"> | {name}</span>
                <img
                    className="img-balance"
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/${parseInt(id)}.png`}
                    alt={`Pokemon ` + id + `: ` + name}
                    title={`Pokemon ` + id + `: ` + name}
                    width="50px"
                    height="50px"
                />
            </li>
            <img 
                id="poke-arrow"
                style={{display: 'none'}}
                src="https://static.thenounproject.com/png/74837-200.png"
                alt="Left Arrow"
                width="50px"
                height="50px"
            />
        </>
    );
}

export default Pokemon;
