import React, { Component } from 'react'

const Todo = ({todo, completeTask, deleteTask}) => {
  return (
    <div className='todo' id={todo.completed ? 'done': null}>
      <span onClick={()=>{completeTask(todo.id, todo.completed)}}>{todo.todo}</span>
      <span className='delete' onClick={()=>{deleteTask(todo.id)}}>X</span>
    </div>
  )
};

export default Todo;