//Import CSS Styling
import "./index.css"
import PokemonContainer from "./Components/PokemonContainer"

//Import Components
import Homepage from "./Components/Homepage";
import { Route, Switch, useRouteMatch} from "react-router-dom"

function App() {

  console.log(useRouteMatch())

  return (
    <div>
      <Switch>
        <Route exact path="/pokemon">
          <PokemonContainer />
        </Route>
        <Route exact path="/">
          <Homepage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
