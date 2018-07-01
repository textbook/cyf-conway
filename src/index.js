import React from "react";
import ReactDOM from "react-dom";

import GameOfLife from "game-of-life-logic";

import "./styles.css";

function App() {
  const game = new GameOfLife(5, 5);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>
        Created a {game.width} x {game.height} game.
      </h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
