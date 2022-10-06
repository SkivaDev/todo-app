import React from 'react'
import "../styles/components/TodoHeader.css"


function TodoHeader({children}) {
  return (
    <header className='Header'>
      {children}
    </header>
  )
}

export default TodoHeader;