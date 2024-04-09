import React, { useState } from "react";
import "./styles/global.css";
import "./styles/layout.css";
import { Movements } from "./pages/Movements";
import { AppRouter } from "./routes";

function App() {
  const [titulo, setTitulo] = useState("");
  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
