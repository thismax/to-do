import React, { Component } from 'react';
import axios from 'axios';
import Todos from './Todos';
import Users from './Users';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      ready: false,
    }
  }

  fetch() {
    const context = this;
    axios.get('/todos')
    .then((todos) => {
      console.log(context.state.ready);
      context.setState({todos, ready: true});
    }).catch((err) => {
      console.error(err);
    });
  }

  render() {
    if (this.state.ready) {
      return (
        <div>
        <Todos todos={this.state.todos}/>
        </div>
      )
    } else {
      this.fetch();
      return (
      <div>
      Loading
      </div>
      )}
  }
}

export default App;