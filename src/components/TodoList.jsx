import React from "react";
import "../styles/components/TodoList.css";

function TodoList(props) {
  return (
    <section className="TodoList-container">
        {!props.totalTodos && props.onEmptyTodos()}
        {!!props.totalTodos &&
          !props.searchedTodos.length &&
          props.onNotFoundTodos()}

        {props.children}
    </section>
  );
}

export default TodoList;


