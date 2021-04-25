import React, { useState } from "react";
// import logo from "./logo.svg";

import "./App.css";
import { Ejemplo } from "./Ejemplo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={"../public/logo.svg"} className="App-logo" alt="logo" />
        <Ejemplo name="Esteban" />
      </header>
    </div>
  );
}

export default App;