import React, { Component } from 'react'

const Todo = ({todo}) => {
  return (
    <div className='todo'>
      <span>{todo.todo}</span>
      <span className='delete'>X</span>
    </div>
  )
};

export default Todo;