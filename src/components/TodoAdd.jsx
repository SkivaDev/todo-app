import React, { useContext } from 'react'
import { BsFillPlusCircleFill } from "react-icons/bs"
import "../styles/components/TodoAdd.css"
import { TodoContext } from '../TodoContext/TodoContext'

function TodoAdd() {
  const {setOpenModal} = useContext(TodoContext);

  const onClickButtonModal = () => {
    setOpenModal(prevState => !prevState);
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