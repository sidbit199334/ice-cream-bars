import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Designer from "./components/Designer";
import Vote from "./components/Vote";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Designer></Designer>
      <Vote></Vote>
    </div>
  );
}

export default App;
