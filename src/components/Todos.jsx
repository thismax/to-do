import React, { Component } from 'react'
import Todo from './Todo'

const Todos = ({todos}) => {
  return (
    <div class='todos'>
      {todos.map( (todo, i) => {
        (<Todo
          todo={todo}
          key={i}
        />)
      })}
    </div>
  );
};

export default Todos;