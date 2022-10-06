import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { RiCloseFill } from "react-icons/ri";
import "../styles/components/TodoModal.css";

function TodoModal({
  addTodo,
  openModal,
  setOpenModal,
  todo,
  editTodo,
  edit,
  setShowAlert,
  setAlertStatus,
}) {
  const status = edit ? "Editar" : "Agregar";
  const inputRef = useRef();
  const [text, setText] = useState(todo?.text || "");
  const [completed, setCompleted] = useState(todo?.completed || false);
  const [error, setError] = useState(todo?.text || false);

  // EL "todo" es el todo que esta en la variable "todoEdit" despues de haber echo click en el boton editar

  useEffect(() => {
    console.log("SE HIZO UN CAMBIO AL TEXTO... TEXTO: " + text);
  }, [text]);

  // Hace que demore el focus del imput hasta que se cada vez que se abra el modal
  useEffect(() => {
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 100);
  }, [openModal]);

  // Cada vez que se seleciona "editar a un todo", guarda el texto en la variable "Texto"
  React.useEffect(() => {
    if (!!todo) {
      setText(todo.text);
      setCompleted(todo.completed);
      setError(false); // si funciona
    }
  }, [todo]);

  // funcion independiente
  const validate = (value) => {
    if (!value) {
      inputRef.current.focus();
      setText(value);
      setError(true);
      return false;
    }
    setError(false);
    return true;
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (!edit) onCreate();
    else onEditSubmit();
  };

  const onCreate = () => {
    if (validate(text)) {
      const newTodo = {
        id: new Date().getTime().toString(),
        text,
        completed: false,
      };
      addTodo(newTodo);
      setText("");
      setCompleted(false);
      setOpenModal(false);
      console.log(text + " onCreate");
      console.log("Se ejecuto el onCreate");
    }
  };

  const onEditSubmit = (e) => {
    if (validate(text)) {
      const editedTodo = {
        ...todo,
        text,
        completed,
      };
      editTodo(editedTodo);
      setText("");
      setCompleted(false);
      setOpenModal(false);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
      setAlertStatus(true);
      setShowAlert(true);
    }
    //muestra la notificacion por 1s y la cierra
  };

  // fUNCION PARA EL IMPUT
  const onChange = (event) => {
    setText(event.target.value);
    setError(false);
  };
  // Funcion para el boton "cancelar"
  const onCancel = () => {
    setError(false);
    setOpenModal(false);
  };

  return (
    <div className={`ModalBackground ${openModal ? "ModalBackground--visible" : ""}`}>
      <form className={`TodoForm ${openModal ? "TodoForm--open" : ""}`} onSubmit={onSubmit}>
      <button type="button" className="TodoForm_closeButton" onClick={onCancel}>
        <RiCloseFill className="icon" />
      </button>
      <label className="TodoForm_inputSeccion">
        <p className={`Label_text ${error ? "text-error" : ""}`}>
          {status} {edit ? "la" : "una"} tarea
        </p>
        <input
          className={`Label_input ${error ? "input-error" : ""}`}
          ref={inputRef}
          type="text"
          placeholder="Estudiar, terminar, hacer, ..."
          value={text}
          onChange={onChange}
          title={`${status} ${edit ? "la" : "una"} tarea`}
        />
      </label>
      <div className="TodoForm_buttonSeccion">
        <button type="button" className="CancelButton" onClick={onCancel}>
          Cancelar
        </button>
        <button type="submit" className="AddButton">
          {status}
        </button>
      </div>
    </form>
    </div>
  );
}

export default TodoModal;
