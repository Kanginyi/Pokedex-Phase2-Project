//Import CSS Styling
import "../index.css";

import React from 'react';
import PokemonLogo from "../PokemonLogo.png";

function Homepage() {
    return (
        <div>
            <br/>
            <img
                src={PokemonLogo}
                alt="Pokemon Logo"
                title="Gotta catch 'em all!"
                width="550px"
            />
            <br/><br/><br/><br/>
            <div id="homepage-container">
                <div className="homepage-div">
                    <u>Pokédex</u>
                    <p className="homepage-text">A list of Pokemon in the order dictated by the National Pokédex. </p>
                </div>
                <div className="homepage-div">
                    <u>Pokémon</u>
                    <p className="homepage-text">Pick 6 Pokémon to fill out your party. </p>
                </div>
                <div className="homepage-div">
                    <u>Trainer Info</u>
                    <p className="homepage-text">Check out your badges and more information about you.</p>
                </div>
                <div className="homepage-div">
                    <u>Options</u>
                    <p className="homepage-text">Choose some options here!</p>
                </div>
            </div>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <p>
                asdf
            </p>
        </div>
    );
}

export default Homepage;