import React, { Component } from 'react'

const Todo = ({todo}) => {
  return (
    <div>
      <span className='todo'>{todo.todo}</span>
      <span>X</span>
    </div>
  )
};

export default Todo;