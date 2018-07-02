import React from "react";
import ReactDOM from "react-dom";

import GameOfLife from "game-of-life-logic";

import "./styles.css";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { game: new GameOfLife(5, 5) };
  }

  render() {
    const game = this.state.game;
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>
          Created a {game.width} x {game.height} game.
        </h2>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
