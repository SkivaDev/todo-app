import React from 'react'
import TodoAdd from './TodoAdd'
import TodoSearch from './TodoSearch'
import "../styles/components/TodoMiddle.css"

function TodoMiddle({children}) {
  return (
    <div className='TodoMiddle'>
      {children}
    </div>
  )
}

export default TodoMiddle