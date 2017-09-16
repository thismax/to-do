import React, { Component } from 'react'
import Todo from './Todo'

const Todos = ({todos}) => {
  return (
    <div className="todos">
      {
        todos.data.map((todo, i) => {
          return (<Todo todo={todo} key={i} />)
        })
      }
    </div>
  )
}

export default Todos;

