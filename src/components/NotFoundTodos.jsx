import React from "react";
import "../styles/components/NotFoundTodos.css"

function NotFoundTodos({searchText}) {
  return (
    <li className="ad_itemNotfound">
      <p>No hay resultados para: {searchText}</p>
    </li>
  );
}

export default NotFoundTodos;
