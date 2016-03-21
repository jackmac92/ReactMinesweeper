var React = require('react'),
    ReactDOM = require('react-dom'),
    Game = require('./game');

var ReactMinesweeper = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Minesweeper!</h1>
        <Game />
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<ReactMinesweeper />, document.getElementById('minesweeper'));
});
