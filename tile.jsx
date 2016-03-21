var React = require('react');

var Tile = React.createClass({

  handleClick: function (e) {
    this.props.updateGame(this.props.tile, e.altKey);
  },
  tileView: function () {
    if (this.props.tile.flagged) {
      return String.fromCharCode(9873);
    } else if (this.props.tile.explored) {
      if (this.props.tile.bombed) {
        return String.fromCharCode(9762);
      } else {
        var bombCount = this.props.tile.adjacentBombCount();
        return (bombCount > 0) ? bombCount : "";
      }
    } else {
      return "";
    }
  },
  getVisibility: function () {

    return (this.props.tile.explored) ? "tile-revealed" : "tile-hidden";
  },
  render: function() {
    return (
      <div onClick={this.handleClick} className={"tile " + this.getVisibility()}>{this.tileView()}</div>
    );
  }

});

module.exports = Tile;
