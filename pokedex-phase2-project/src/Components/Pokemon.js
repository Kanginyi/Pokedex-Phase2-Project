import React from 'react';

function Pokemon({id, name, image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/240px-Pok%C3%A9_Ball_icon.svg.png"}) {
    return (
        <> 
            <h1>{id}</h1>
            <h2>{name}</h2>
            <img
                src={image}
                alt={`Pokemon ` + id + `: ` + name}
                title={`Pokemon ` + id + `: ` + name}
                width="250px"
                height="250px"
            />
        </>
    );
}

export default Pokemon;
