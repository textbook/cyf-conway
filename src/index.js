import React from "react";
import ReactDOM from "react-dom";

import GameOfLife from "game-of-life-logic";

import "./styles.css";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { game: new GameOfLife(5, 5) };
  }

  clicked = (row, col) => {
    const oldValue = this.state.game.matrix[row][col];
    const newValue = oldValue === 0 ? 1 : 0;
    this.state.game.copyMatrixAt(row, col, [[newValue]]);
    this.forceUpdate();
  };

  tick = () => {
    this.state.game.tick();
    this.forceUpdate();
  };

  render() {
    const game = this.state.game;
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>
          Created a {game.width} x {game.height} game.
        </h2>
        <div className="matrix">
          {game.matrix.map((row, rowIndex) => (
              <div className="row" key={rowIndex}>
                {row.map((cell, colIndex) => (
                    <div className={cell ? 'live cell' : 'dead cell'}
                         key={colIndex}
                         onClick={() => this.clicked(rowIndex, colIndex)}></div>
                ))}
              </div>
          ))}
        </div>
        <button onClick={() => this.tick()}>Tick</button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
