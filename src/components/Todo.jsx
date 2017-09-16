import React, { Component } from 'react'

const Todo = ({todo}) => {
  return (
    <div>
      <span className='todo'>{todo.todo}</span>
    </div>
  )
};

export default Todo;