import useTodos from "../hooks/useTodos";
import TodoHeader from "../components/TodoHeader";
import TodoList from "../components/TodoList";
import TodoMiddle from "../components/TodoMiddle";
import TodoSearch from "../components/TodoSearch";
import TodoItem from "../components/TodoItem";
import TodoModal from "../components/TodoModal";
import TodoForm from "../components/TodoForm";
import TodoAdd from "../components/TodoAdd";
import EmptyTodos from "../components/EmptyTodos";
import NotFoundTodos from "../components/NotFoundTodos";
import "../styles/pages/App.css";

function App() {
  const {
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
  } = useTodos();

  return (
    <main>
      <div>
        <TodoHeader>
          <div className="Header_container">
            <h2 className="Header_text">
              <span>{completedTodos}</span> DE <span>{totalTodos}</span> TAREAS
              COMPLETADAS
            </h2>
          </div>
        </TodoHeader>
        <TodoMiddle>
          <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          <TodoAdd setOpenModal={setOpenModal} />
        </TodoMiddle>
        <TodoMiddle />
        <TodoList
          searchedTodos={searchedTodos}
          searchText={searchValue}
          totalTodos={totalTodos}
          onEmptyTodos={() => <EmptyTodos setOpenModal={setOpenModal} />}
          onNotFoundTodos={() => <NotFoundTodos searchText={searchValue} />}
        >
          {({ completed, text, id }) => (
            <TodoItem
              key={text}
              id={id}
              completed={completed}
              text={text}
              onComplete={() => completeTodo(id)}
              onDelete={() => deleteTodo(id)}
              onEdit={() => editTodo(id)}
            />
          )}
          
          {!!openModal && (
            <TodoModal>
              <TodoForm
                // { addTodo, setOpenModal, saveTodos, todos, todoEdit: todo}
                addTodo={addTodo}
                setOpenModal={setOpenModal}
                saveTodos={saveTodos}
                todoEdit={todo}
              />
            </TodoModal>
          )}
        </TodoList>
      </div>
    </main>
  );
}

export default App;
