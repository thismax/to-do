import React, { Component } from 'react';
import axios from 'axios';
import Todos from './Todos';
import Users from './Users';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      todos: []
    }
  }

  componentDidMount() {
    this.setState({
      todos: [
        {
          "username": "The Rod",
          "todo": "kick ass",
          "completed": false
        },
        {
          "username": "The Rod",
          "todo": "chew bubblegum",
          "completed": true
        }
      ]
    });
  }

  render() {
    return (
      <div>
       <Todos todos={this.state.todos}/>
      </div>
    )
  }
}

export default App;