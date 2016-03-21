var React = require('react');
var Minesweeper = require('./minesweeper.js');
var Board = require('./board');
var Modal = require('./modal');

var Game = React.createClass({
  getInitialState: function () {
    return { board: new Minesweeper.Board(9, 10) };
  },
  updateGame: function (tile, flagged) {
    if (flagged) {
      tile.toggleFlag();
    } else {
      tile.explore();
    }

    this.setState({ board: this.state.board });
  },
  restartGame: function (e) {
    e.preventDefault();
    this.replaceState(this.getInitialState());
  },
  getGameState: function () {
    if (this.state.board.won()) {
      return "won";
    } else if (this.state.board.lost()) {
      return "lost";
    }
  },
  render: function () {
    return (
      <div>
        <Board board={this.state.board} updateGame={this.updateGame} />
        <Modal gameState={this.getGameState()}
           restartGame={this.restartGame}/>
      </div>
    );
  }
});

module.exports = Game;
