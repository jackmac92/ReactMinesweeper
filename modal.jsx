var React = require('react');

var Modal = React.createClass({
  getClassName: function () {
    if (this.props.gameState) {
      return "modal is-active";
    } else {
      return "modal";
    }
  },

  render: function() {
    return (
      <section id="modal" className={this.getClassName()}>
        <article className="modal-content">
          You have {this.props.gameState} the game!!
          <button onClick={this.props.restartGame}>Play Again!</button>
        </article>
        <div className="modal-screen"></div>
      </section>
    );
  }

});

module.exports = Modal;
