import React from 'react'
import TodoAdd from './TodoAdd'
import TodoSearch from './TodoSearch'
import "../styles/components/TodoMiddle.css"

function TodoMiddle() {
  return (
    <div className='TodoMiddle'>
      <TodoSearch />
      <TodoAdd />
    </div>
  )
}

export default TodoMiddle