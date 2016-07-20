var React = require('react')
var ReactDOM = require('react-dom')
var Counter = require('./counter')

var CounterList = React.createClass({
  getInitialState : function(){
    return { 
      counters : []
    }
  },
  addcounter : function(){
       this.state.counters.push(<Counter/>)
         this.setState({counters : this.state.counters})
       },
  deletecounter : function(){
    this.state.counters.pop()
    this.setState({counters : this.state.counters})
  },
  render : function(){
    return (
      <div> 
        <button onClick = {this.addcounter}>Add a Counter</button>
        <button onClick = {this.deletecounter}>Remove last Counter</button>
        {this.state.counters}
      </div>
    )
  },
});

module.exports = CounterList