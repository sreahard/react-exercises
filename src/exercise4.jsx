var React = require('react')
var ReactDOM = require('react-dom')
var CounterList = require('./counterList')

var App = React.createClass({
  render: function() {
    return (
      <CounterList />
      )
  }
})

ReactDOM.render(<App />, document.getElementById('app'))
