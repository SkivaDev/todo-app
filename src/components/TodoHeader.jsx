import React, { useContext } from 'react'
import "../styles/components/TodoHeader.css"
import { TodoContext } from '../TodoContext/TodoContext'


function TodoHeader() {
  const {totalTodos, completedTodos} = useContext(TodoContext);
  return (
    <header className='Header'>
      <div className='Header_container'>
        <h2 className='Header_text'>
          <span>{completedTodos}</span> DE <span>{totalTodos}</span> TAREAS COMPLETADAS
        </h2>
      </div>
    </header>
  )
}

export default TodoHeader