import React, {useEffect, useState} from "react";

//Import CSS Styling
import "./index.css"
import PokemonContainer from "./Components/PokemonContainer"

//Import Components
import Homepage from "./Components/Homepage";
import { Route, Switch} from "react-router-dom"
import PokedexContainer from "./Components/PokedexContainer";

function App() {
  const [savePoke, setSavePoke] = useState([])
  

  useEffect(() => {
    fetch("http://localhost:4000/team")
    .then(resp => resp.json())
    .then(data => {
        if (data.length > 0) {
            setSavePoke(data)
        }
    })
  }, [])


  return (
    <div>
      <Switch>
        <Route exact path="/pokemon">
          <PokemonContainer savePoke={savePoke} setSavePoke={setSavePoke} />
        </Route>
        <Route exact path="/pokedex">
          <PokedexContainer savePoke={savePoke} setSavePoke={setSavePoke}/>
        </Route>
        <Route exact path="/">
          <Homepage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
