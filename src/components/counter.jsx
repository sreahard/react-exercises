var React = require('react')
var ReactDOM = require('react-dom')

var Counter= React.createClass({
  getInitialState: function() {
    return {value: 0 };
  },
  handleIncrement: function(event) {
    this.setState({value: this.state.value + 1})
  },
  handleDecrement: function(event) {
    this.setState({value: this.state.value - 1})
  },

  render: function() {
    var numStyle = {
      margin: '10px'
    };
    return (
      <div>
        <h1>
          <button onClick={this.handleIncrement}> Add One + </button> 
            <span style={numStyle}>{this.state.value}</span>
          <button onClick={this.handleDecrement}> Subtract One + </button>
        </h1>
      </div>
      )
  }

});

module.exports = Counter
