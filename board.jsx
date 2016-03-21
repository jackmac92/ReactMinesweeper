var React = require('react'),
    Tile = require('./tile');

var Board = React.createClass({
  getRows: function () {
    var that = this;

    return this.props.board.grid.map(function (row, idx) {
      var tiles = row.map(function(tile, idx2) {
        return (
          <Tile updateGame={that.props.updateGame} tile={tile} key={idx2}/>
        );
      });
      return (
        <div className="row" key={idx}>
          {tiles}
        </div>
      );
    });
  },
  render: function () {
    return (
      <div>
        {this.getRows()}
      </div>
    );
  }

});

module.exports = Board;
