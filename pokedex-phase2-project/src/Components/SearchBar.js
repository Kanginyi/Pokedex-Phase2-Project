import React from 'react';

function SearchBar({search}) {
    return (
        <>
            <label>Search Pokémon:<br/>
                <input onChange={search} type="text" id="search-bar" name="search" placeholder="Search Pokémon"></input>
            </label>
        </>
    );
}

export default SearchBar;
