import React from 'react';
import { BsCheckLg } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import "../styles/components/TodoAlert.css"

function TodoAlert({children, alertStatus}) {
  return (
    <div className={`Alert_container ${alertStatus ? "Alert_container--edit" : "Alert_container--delete"}`}>
      {alertStatus ? <BsCheckLg className='iconEdit'/> : <MdClose className='iconDelete'/>}
      
      <p className={`text`}>
              {alertStatus ? "EDITADO" : "ELIMINADO"} CORRECTAMENTE
            </p>
    </div>
  )
}

export default TodoAlert