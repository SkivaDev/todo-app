import React from "react";

function NotFoundTodos({searchText}) {
  return (
    <li className="ad_itemNotfound">
      <p>No hay resultados para: {searchText}</p>
    </li>
  );
}

export default NotFoundTodos;
