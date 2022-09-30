import React, { useContext } from "react";
import TodoModal from "./TodoModal";
import { TodoContext } from "../TodoContext/TodoContext";
import TodoAdd from "./TodoAdd";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import "../styles/components/TodoList.css"

function TodoList() {
  const {
    searchedTodos: todos,
    totalTodos,
    searchValue,
    completeTodo,
    deleteTodo,
    editTodo,
    openModal,
  } = useContext(TodoContext);

  return (
    <>
      <ul className="TodoList">
        {todos && todos.length > 0 ? (
          todos.map(({ completed, text, id }) => (
            <TodoItem
              key={text}
              id={id}
              completed={completed}
              text={text}
              onComplete={() => completeTodo(id)}
              onDelete={() => deleteTodo(id)}
              onEdit={() => editTodo(id)}
            />
          ))
        ) : totalTodos > 0 ? (
          <li className="ad_itemNotfound">
            <p>No hay resultados para: {searchValue}</p>
          </li>
        ) : (
          <li className="ad_noItems">
            Crea una nueva tarea <TodoAdd />
          </li>
        )}
      </ul>
      {!!openModal && (
        <TodoModal>
          <TodoForm />
        </TodoModal>
      )}
    </>
  );
}

export default TodoList;
