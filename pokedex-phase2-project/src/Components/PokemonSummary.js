import React, {useState} from 'react'
import "../tabs.css"

const PokemonSummary = () => {

    const [toggleState, setToggleState] = useState(1)

    const toggleTab = (index) => {
        console.log(index)
        setToggleState(index)
    }

    return (
        <div className="container">
            <div className="block-tabs">
                <div className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>Tab1</div>
                <div className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>Tab2</div>
                <div className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)}>Tab3</div>
            </div>

            <div className="content-tabs">
                <div className={toggleState === 1 ? "content  active-content" : "content"}>
                    <h2>
                        Content 1
                    </h2>
                    <hr />
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
                    praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
                    vel voluptatum?
                    </p>
                </div>

                <div className={toggleState === 2 ? "content  active-content" : "content"}>
                    <h2>
                        Content 2
                    </h2>
                    <hr />
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
                    voluptatum qui adipisci.
                    </p>
                </div>

                <div className={toggleState === 3 ? "content  active-content" : "content"}>
                    <h2>
                        Content 3
                    </h2>
                    <hr />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
                        nostrum rerum laudantium totam unde adipisci incidunt modi alias!

                    </p>
                </div>
            </div>
        </div>
    )
}

export default PokemonSummary

