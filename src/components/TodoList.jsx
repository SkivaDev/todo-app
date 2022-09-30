import React from "react";
import "../styles/components/TodoList.css";

function TodoList(props) {
  return (
    <section className="TodoList-container">
      <ul>
        {!props.totalTodos && props.onEmptyTodos()}
        {props.totalTodos &&
          !props.searchedTodos.length &&
          props.onNotFoundTodos()}

        {props.searchedTodos.map(props.children)}
      </ul>
      
    </section>
  );
}

export default TodoList;

{
  /* {todos && todos.length > 0 ? (
    todos.map()
  ) : totalTodos > 0 ? (
    <li className="ad_itemNotfound">
      <p>No hay resultados para: {searchValue}</p>
    </li>
  ) : (
    <li className="ad_noItems">
      Crea una nueva tarea <TodoAdd />
    </li>
  )} */
}
