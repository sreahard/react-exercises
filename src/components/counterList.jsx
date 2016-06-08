var React = require('react')
var ReactDOM = require('react-dom')
var Counter = require('./counter')

var CounterList = React.createClass({
  getInitialState: function() {
    return {counters: false};
  },
  handleCounterAdd: function(event) {
    this.setState({counters: true})
  },


  render: function() {
    var counter = null;
      if (this.state.counters) {
        counter = <Counter />
      }
    
    return (
      <div>
        <button onClick={this.handleCounterAdd}> Add Counter </button>
        {counter}
      </div>
    )
  }

});

module.exports = CounterList