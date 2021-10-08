import React from "react";

//Import CSS Styling
import "./index.css"
import PokemonContainer from "./Components/PokemonContainer"

//Import Components
import Homepage from "./Components/Homepage";
import { Route, Switch} from "react-router-dom"
import PokedexContainer from "./Components/PokedexContainer";

function App() {

  return (
    <div>
      <Switch>
        <Route exact path="/pokemon">
          <PokemonContainer />
        </Route>
        <Route exact path="/pokedex">
          <PokedexContainer />
        </Route>
        <Route exact path="/">
          <Homepage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
