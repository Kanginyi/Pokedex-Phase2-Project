import React from 'react';

function Pokemon({id, name}) {
    return (
        <> 
            <h1>{id}</h1>
            <h2>{name}</h2>
        </>
    );
}

export default Pokemon;