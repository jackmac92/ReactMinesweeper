var React = require('react'),
    ReactDOM = require('react-dom'),
    Game = require('./game');

var ReactMinesweeper = React.createClass({
  render: function () {
    return (
      <Game />
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<ReactMinesweeper />, document.getElementById('minesweeper'));
});
