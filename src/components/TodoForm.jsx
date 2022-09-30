import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { RiCloseFill } from "react-icons/ri";
import "../styles/components/TodoForm.css";
import { TodoContext } from "../TodoContext/TodoContext";

function TodoForm() {
  const { addTodo, setOpenModal, saveTodos, todos, todoEdit: todo} = useContext(TodoContext);
  let edit = false;
  const [newTodoValue, setNewTodoValue] = useState("")

  const status = edit ? "Editar" : "Agregar";
  const [text, setText] =  useState(todo?.text || "");
  const [completed, setCompleted] = useState(todo?.completed || false);

  const onChange = (event) => {
    setText(event.target.value);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (!edit) addTodo(newTodoValue);
    else onEditSubmit();
    setOpenModal(false);
    setNewTodoValue("");
  };

  const onEdit = (todo) => {
    const newTodos = todos.map((t) => {
      if (t.id === todo.id) {
        return todo;
      }
      return t;
    });
    saveTodos([...newTodos]);
    setOpenModal(false);
  }

  const onEditSubmit = (e) => {
		if (text) {
			const editedTodo = {
				...todo,
				text,
				completed,
			};
			if (onEdit) onEdit(editedTodo);
		}
	};

  return (
    <form className="TodoForm" onSubmit={onSubmit}>
      <button className="TodoForm_closeButton" onClick={onCancel}>
        <RiCloseFill className="icon" />
      </button>
      <label className="TodoForm_inputSeccion">
        <p>{status} {edit ? "la" : "una"} tarea</p>
        <input 
        type="text" 
        placeholder="Estudiar, terminar, hacer, ..."
        value={text}
        onChange={onChange}
        title={`${status} ${edit ? "la" : "una"} tarea`}
        />
      </label>
      <div className="TodoForm_buttonSeccion">
        <button className="TodoForm_cancelButton" onClick={onCancel}>
          Cancelar
        </button>
        <button type="submit" className="TodoForm_addButton" >{status}</button>
      </div>
    </form>
  );
}

export default TodoForm;
