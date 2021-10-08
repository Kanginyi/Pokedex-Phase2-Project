import React from "react";

//Import CSS Styling
import "./index.css"

//Import Components
import Homepage from "./Components/Homepage";
import PokedexContainer from "./Components/PokedexContainer";

function App() {
  return (
    <>
      <Homepage />
      <hr />

      <PokedexContainer />
  </>
  );
}

export default App;
