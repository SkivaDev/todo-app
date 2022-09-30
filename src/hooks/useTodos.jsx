import React, { useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage';


function useTodos() {
  // 
  const {
    item: todos,
    saveItem: saveTodos,
  } = useLocalStorage("TODO_Items", []);

  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [modeForm, setModeForm] = useState("submit");
  const [currentText, setCurrentText] = useState("");

  //edit
  const [todoEdit, setTodoEdit] = useState("");


  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (searchValue.length > 0) {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  } else {
    searchedTodos = todos;
  }
  // Función generadora de id
  const idGenerator = () => {
    const id = new Date().getTime().toString();
    return id;
  }
  // Función para añadir un nuevo TODO
  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      id: idGenerator(),
      text,
      completed: false,
    });
    saveTodos(newTodos);
  };
  // Funcion para completar TODOs
  const completeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    console.log(newTodos);
    saveTodos(newTodos);
  };
  
  // Funcion para eliminar TODOs
  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    saveTodos(newTodos);
  };

  // Funcion para editar TODOs
  const openEditForm = () => {
    // setCurrentText(text);
    setOpenModal(true);
    setModeForm("edit");
    console.log(currentText);
  }

  const editTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    setTodoEdit(todo)
    if(todo) {
      openModal(true);
    }
  }

  return {
    totalTodos,
    addTodo,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
    editTodo,
    openModal,
    setOpenModal,
    modeForm,
    currentText,
    openEditForm,
    todoEdit,
    saveTodos,
    todos,
  };
}

export default useTodos;