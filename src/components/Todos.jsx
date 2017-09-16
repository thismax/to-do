import React, { Component } from 'react'
import Todo from './Todo'

const Todos = ({todos, completeTask, deleteTask}) => {
  return (
    <div className="todos">
      {
        todos.data.map((todo, i) => {
          return (<Todo todo={todo} completeTask={completeTask} deleteTask={deleteTask} key={i} />)
        })
      }
    </div>
  )
}

export default Todos;

