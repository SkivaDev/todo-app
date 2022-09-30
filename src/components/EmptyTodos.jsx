import React from "react";
import TodoAdd from "./TodoAdd";

function EmptyTodos({setOpenModal}) {
  return (
    <li className="ad_noItems">
      Crea una nueva tarea <TodoAdd setOpenModal={setOpenModal}/>
    </li>
  );
}

export default EmptyTodos;
