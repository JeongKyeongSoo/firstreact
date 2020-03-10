import React from 'react';
import PropTypes from 'prop-types'

class App extends React.Component{
  constructor(props){
    super(props)
    console.log('hello')
  }

  state = {
    count: 0
  };

  add = () => {
    // console.log('add');
    this.setState(current => ({count: current.count + 1}))
  }

  minus = () => {
    // console.log('minus');
    this.setState(current => ({count: current.count - 1}))
  }

  componentDidMount(){
    console.log('renderd')
  }

  componentDidUpdate(){
    console.log('updated')
  }

  componentWillUnmount(){
    console.log('bye')
  }

  render(){
    console.log('render')
    return (
    <div>
      <h1>The number is {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
    )
  }
}

export default App;
