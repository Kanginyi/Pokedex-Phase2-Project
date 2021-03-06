//Import CSS Styling
import "../index.css";

import React from 'react';
import PokemonLogo from "../PokemonLogo.png";
//import PokemonContainer from "./PokemonContainer" //Pokemon Team
import { Link } from "react-router-dom"
import TrainerInfo from "./TrainerInfo";

function Homepage() {
    return (
        <div>
            <br/>
            <img
                src={PokemonLogo}
                alt="Pokémon Logo"
                title="Gotta catch 'em all!"
                width="550px"
            />
            <br/><br/><br/><br/>
            <div id="homepage-container">
                <div className="homepage-div">
                    <Link to={'/pokedex'}>Pokedex</Link>
                    <p className="homepage-text">A list of Pokemon in the order dictated by the National Pokédex. </p>
                </div>
                <div className="homepage-div">
                    <Link to={'/pokemon'}>Pokémon</Link>
                    <p className="homepage-text">Pick 6 Pokémon to fill out your party. </p>
                </div>
                <div className="homepage-div">
                    <Link to={"/trainerInfo"}>Trainer Info</Link>
                    <p className="homepage-text">Check out your badges and more information about you.</p>
                </div>
                <div className="homepage-div">
                    <u>Options</u>
                    <p className="homepage-text">Choose some options here!</p>
                </div>
            </div>
            <br/><br/><br/><br/>
            {/* <footer>

                <strong>Check Us Out:</strong><br/>
                <a href="https://github.com/Kanginyi" target="_blank">Eric Yi</a><br/> 
                <a href="https://github.com/qd11" target="_blank">Quang Do</a>
            </footer> */}
        </div>
    );
}

export default Homepage;