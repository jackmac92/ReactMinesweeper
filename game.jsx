var React = require('react');
var Minesweeper = require('./minesweeper.js');
var Board = require('./board');
var Modal = require('./modal');

var Game = React.createClass({
  getInitialState: function () {
    return { board: new Minesweeper.Board(9, 10), remainingBombs:10 };
  },
  updateGame: function (tile, flagged) {
    if (flagged) {
      tile.toggleFlag();
      this.state.remainingBombs--;
    } else {
      tile.explore();
    }

    this.setState({ board: this.state.board, remainingBombs: this.state.remainingBombs});
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
        <span>Bombs Remaining: {this.state.remainingBombs}</span>
        <Board board={this.state.board} updateGame={this.updateGame} />
        <Modal gameState={this.getGameState()}
           restartGame={this.restartGame}/>
      </div>
    );
  }
});

module.exports = Game;
