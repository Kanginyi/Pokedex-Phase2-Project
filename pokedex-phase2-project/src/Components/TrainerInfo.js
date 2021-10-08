import React from 'react';
import Clock from './Clock';

import "../index.css";

function TrainerInfo() {
    const quangNames = ["Quang", "Quang Do", "Quangothy", "Quangerellagrams", "The YUNG Magician", "Quankers", "a lil qt", "Faker", "The GOAT"];

    function randomNumbers () {
        const randomRange = Math.floor(Math.random() * (99999- 0 + 1) + 1);

        let randomID;

        if (randomRange < 10) {
            randomID = "0000" + randomRange.toString();
        } else if (randomRange >= 10 && randomRange < 100) {
            randomID = "000" + randomRange.toString();
        } else if (randomRange >= 100 && randomRange < 1000) {
            randomID = "00" + randomRange.toString();
        } else if (randomRange >= 1000 && randomRange < 10000) {
            randomID = "0" + randomRange.toString();
        } else {
            randomID = randomRange;
        }
        return randomID;
    }

    return (
        <div id="big-box">
            <div id="overall-trainer-card">
                <div id="inner-card-lining">
                    <div id="trainer-card-title">
                        <img src="https://www.jing.fm/clipimg/full/292-2920179_pokemon-ball-black-and-white.png" alt="Pokeball" width="40px" height="40px"/>
                        <strong>TRAINER CARD</strong>
                        <img src="https://www.jing.fm/clipimg/full/292-2920179_pokemon-ball-black-and-white.png" alt="Pokeball" width="40px" height="40px" />
                    </div>

                    <div id="trainer-card-name" className="trainer-card-text-bg">
                        <span>Name: </span>
                        <span>{quangNames[Math.floor(Math.random() * quangNames.length)]}</span>
                    </div>

                    <div id="trainer-card-image" className="trainer-card-text-bg">
                        <img id="quang-image" src="https://ca.slack-edge.com/T02MD9XTF-U02CFCDGNGH-c848ef436c19-512" alt="Quang Do" title="lil qtpie" height="250px" width="250px"/>
                    </div>

                    <div id="trainer-card-number"  className="trainer-card-text-bg">
                        <span>ID Number: </span>
                        <span>{randomNumbers()}</span>
                    </div>

                    <div id="trainer-card-money" className="trainer-card-text-bg">
                        <span>Money: </span>
                        <span>$999,999</span>
                    </div>

                    <div id="trainer-card-pokedex" className="trainer-card-text-bg">
                        <span>Pokedex: </span>
                        <span>890/890</span>
                    </div>

                    <div id="trainer-card-time" className="trainer-card-text-bg">
                        <span>Time: </span>
                        <span><Clock /></span>
                    </div>

                    <div id="badges">
                        <div className="eight-badges">
                            <img src="https://cdn2.bulbagarden.net/upload/thumb/d/dd/Boulder_Badge.png/600px-Boulder_Badge.png" alt="Boulder Badge" title="Boulder Badge" width="50px" height="50px"/>
                        </div>
                        <div className="eight-badges">
                            <img src="https://cdn2.bulbagarden.net/upload/9/9c/Cascade_Badge.png" alt="Cascade Badge" title="Cascade Badge" width="50px" height="50px"/>
                        </div>
                        <div className="eight-badges">
                            <img src="https://cdn2.bulbagarden.net/upload/a/a6/Thunder_Badge.png" alt="Thunder Badge" title="Thunder Badge" width="50px" height="50px"/>
                        </div>
                        <div className="eight-badges">
                            <img src="https://cdn2.bulbagarden.net/upload/b/b5/Rainbow_Badge.png" alt="Rainbow Badge" title="Rainbow Badge" width="50px" height="50px"/>
                        </div>
                        <div className="eight-badges">
                            <img src="https://cdn2.bulbagarden.net/upload/7/7d/Soul_Badge.png" alt="Soul Badge" title="Soul Badge" width="50px" height="50px"/>
                        </div>
                        <div className="eight-badges">
                            <img src="https://cdn2.bulbagarden.net/upload/6/6b/Marsh_Badge.png" alt="Marsh Badge" title="Marsh Badge" width="50px" height="50px"/>
                        </div>
                        <div className="eight-badges">
                            <img src="https://cdn2.bulbagarden.net/upload/b/b5/Rainbow_Badge.png" alt="Rainbow Badge" title="Rainbow Badge" width="50px" height="50px"/>
                        </div>
                        <div className="eight-badges">
                          <img src="https://cdn2.bulbagarden.net/upload/1/12/Volcano_Badge.png" alt="Volcano Badge" title="Volcano Badge" width="50px" height="50px"/>
                        </div>
                        <div className="eight-badges">
                            <img src="https://cdn2.bulbagarden.net/upload/7/78/Earth_Badge.png" alt="Earth Badge" title="Earth Badge" width="50px" height="50px"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TrainerInfo;