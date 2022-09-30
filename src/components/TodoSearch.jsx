import React from 'react'
import { BiSearchAlt } from "react-icons/bi"
import "../styles/components/TodoSearch.css"

function TodoSearch({searchValue, setSearchValue}) {

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    // no se nos vaya olvidar borrar el consoleloge
    setSearchValue(event.target.value);
  }
  
  return (
    <div className='input_container'>
      <input 
      type="text" 
      placeholder='Buscar una tarea'
      value={searchValue}
      onChange={onSearchValueChange}
      />
      <BiSearchAlt className='icon'/>
    </div>
  )
}

export default TodoSearch