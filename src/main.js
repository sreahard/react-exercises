var React = require('react')
var ReactDOM = require('react-dom')
var CounterList = require('./components/counterList')

var App = React.createClass({
  render: function() {
    return (
      <div>
      My Counter List! HOT!! SHIT!!!
      <CounterList />
      </div>
      )
  }
})

ReactDOM.render(<App />, document.getElementById('app'))
