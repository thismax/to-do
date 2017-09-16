import React, { Component } from 'react';
import axios from 'axios';
import Todos from './Todos';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      ready: false,
    }
    this.onKeyPress = this.onKeyPress.bind(this)
  }

  fetch() {
    const context = this;
    axios.get('/todos')
    .then((todos) => {
      context.setState({todos, ready: true});
    }).catch((err) => {
      console.error(err);
    });
  }

  post(input) {
    axios.post('/todos', {
      "todo": input,
      "completed": true
    })
    .then((success) => {
      console.log(success);
    }).catch((err) => {
      console.log(err);
    });
  }

  onKeyPress(event) {
    if(event.key == 'Enter') { 
      this.post(event.target.value);
    }
    this.fetch();
  }

  render() {
    if (this.state.ready) {
      return (
        <div>
          <input type="text" name="query" onKeyPress={this.onKeyPress} />
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