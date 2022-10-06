import React from "react";
import { BsCheckLg } from "react-icons/bs";
import { BsTrash } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import "../styles/components/TodoItem.css";



function TodoItem({ text, completed, onComplete, onDelete, onOpenEdit}) {
  return (
    <li className="TodoItem">
      <div className="cheackbox">
        <button 
        className={`button_cheackbox ${completed && "button_cheackbox--active"}`}
        onClick={onComplete}
        >
          <BsCheckLg className={`icon_check`} />
        </button>
        <p className={`text_cheackbox ${completed && "text_cheackbox--active"}`}>{text}</p>
      </div>
      <div className="buttons_container">
        <button 
        className="button_edit"
        onClick={onOpenEdit}
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
