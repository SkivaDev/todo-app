import React from 'react'
import { createPortal } from 'react-dom';
import TodoForm from './TodoForm'
import "../styles/components/TodoModal.css"



function TodoModal({children}) {
  return createPortal(
    <div className='.ModalBackground'>
      {children}
    </div>, 
    document.getElementById("modal")
  )
}

export default TodoModal;