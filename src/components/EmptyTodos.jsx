import React from "react";
import TodoAdd from "./TodoAdd";
import "../styles/components/EmptyTodos.css"

function EmptyTodos({setOpenModal, setFormStatus, setTodoEdit}) {
  return (
    <li className="ad_noItems">
      Crea una nueva tarea <TodoAdd setOpenModal={setOpenModal} setFormStatus={setFormStatus} setTodoEdit={setTodoEdit}/>
    </li>
  );
}

export default EmptyTodos;
