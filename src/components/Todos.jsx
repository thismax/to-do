import React, { Component } from 'react'
import Todo from './Todo'

const Todos = ({todos}) => {
  if (true) {
    return (
      <div className="todos">
        {
          todos.map((todo, i) => {
            return (<Todo todo={todo} />)
          })
        }
      </div>
    )
  }
}

export default Todos;

