import React from 'react'
import { BsFillPlusCircleFill } from "react-icons/bs"
import "../styles/components/TodoAdd.css"


function TodoAdd({setOpenModal, setFormStatus, setTodoEdit}) {

  const onClickButtonModal = () => {
    setFormStatus(false);
    setTodoEdit("");
    setOpenModal(true);
  }

  return (
    <button 
    className='TodoAddButton'
    onClick={onClickButtonModal}
    >
      <BsFillPlusCircleFill className='icon'/>
    </button>
  )
}

export default TodoAdd;