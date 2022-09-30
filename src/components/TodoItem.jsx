import React from "react";
import { BsCheckLg } from "react-icons/bs";
import { BsTrash } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import "../styles/components/TodoItem.css";

// key={text}
// id={id}
// completed={completed}
// text={text}
// onComplete={completedTodo}
// onDelete={deleteTodo}
// onEdit={editTodo}

function TodoItem({ text , id, completed, onComplete, onDelete, onEdit}) {
  return (
    <li className="TodoItem">
      <div className="cheackbox">
        <button 
        className={`button_cheackbox ${completed && "button_cheackbox--active"}`}
        onClick={onComplete}
        >
          <BsCheckLg className={`icon_check`} />
        </button>
        <p>{text}</p>
      </div>
      <div className="buttons_container">
        <button 
        className="button_edit"
        onClick={onEdit}
        >
          <FiEdit className="icon icon_edit" />
        </button>
        <button 
        className="button_trash"
        onClick={onDelete}
        >
          <BsTrash className="icon icon_trash" />
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
