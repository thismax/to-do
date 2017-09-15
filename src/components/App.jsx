import React, { Component } from 'react';
import axios from 'axios'
import Todos from './Todos';
import Users from './Users';

class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        {/* <Users /> */}
        <Todos />
      </div>
    )
  }
}

export default App;