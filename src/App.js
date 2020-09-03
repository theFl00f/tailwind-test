import React, { Component } from 'react';
import ListItem from './components/ListItem'

class App extends Component {
  constructor() {
    super()
    this.state = {
      numbers: [1, 2, 3, 4, 5]
    }
  }
 
  
  render() {
    return (
      <ul className="" >
        {this.state.numbers.map((number) => { 
          return <ListItem name={number} />
        }) }
      </ul>
    )
  }
}

export default App;
