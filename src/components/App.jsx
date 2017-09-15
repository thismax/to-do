import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Todos from './Todos';
import Users from './Users';

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

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