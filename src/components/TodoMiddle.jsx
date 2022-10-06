import React from 'react'
import "../styles/components/TodoMiddle.css"

function TodoMiddle({children}) {
  return (
    <div className='TodoMiddle'>
      {children}
    </div>
  )
}

export default TodoMiddle