import React, { useState } from "react";
import "./styles/global.css";
import "./styles/layout.css";
import { Movements } from "./pages/Movements";

function App() {
  const [titulo, setTitulo] = useState("");
  return (
    <>
      <header>
        <h1>{titulo}</h1>
      </header>
      <main>
        <Movements setTitulo={setTitulo} />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
