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
    this.fetch = this.fetch.bind(this);
    this.post = this.post.bind(this);
    this.completeTask = this.completeTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  fetch() {
    const context = this;
    axios.get('/todos')
    .then((todos) => {
      console.log('successful get!');
      context.setState({todos, ready: true});
    }).catch((err) => {
      console.error(err);
    });
  }

  post(input) {
    axios.post('/todos', {
      "todo": input,
      "completed": false
    })
    .then((success) => {
      this.fetch();
    }).catch((err) => {
      console.error(err);
    });
  }

  completeTask(id, completed) {
    axios.put('/todos', 
      {
        "id": id,
        "completed": completed
      }
    ).then((success) => {
      console.log(success);
      this.fetch();
    }).catch((err) => {
      console.log(err);
    });
  }

  deleteTask(id) {
    axios({
      method: 'delete',
      url: '/todos',
      data: {
        'id': id
      }
    })
    .then((success) => {
      console.log(success);
      this.fetch();
    }).catch((err) => {
      console.log(err);
    });
  }

  onKeyPress(event) {
    if(event.key == 'Enter') { 
      this.post(event.target.value);
      event.target.value = '';
      this.fetch();
    }
  }

  render() {
    if (this.state.ready) {
      return (
        <div>
          <input type="text" name="query" onKeyPress={this.onKeyPress} />
          <Todos todos={this.state.todos} completeTask={this.completeTask} deleteTask={this.deleteTask}/>
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