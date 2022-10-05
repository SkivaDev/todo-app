import useTodos from "../hooks/useTodos";
import TodoHeader from "../components/TodoHeader";
import TodoList from "../components/TodoList";
import TodoMiddle from "../components/TodoMiddle";
import TodoSearch from "../components/TodoSearch";
import TodoItem from "../components/TodoItem";
import TodoModal from "../components/TodoModal";
import TodoAdd from "../components/TodoAdd";
import EmptyTodos from "../components/EmptyTodos";
import NotFoundTodos from "../components/NotFoundTodos";
import TodoAlert from "../components/TodoAlert";
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
    openModeEditTodo,
    editTodo,
    openModal,
    setOpenModal,
    todoEdit,
    setFormStatus,
    formStatus,
    setTodoEdit,
    showAlert,
    setShowAlert,
    alertStatus,
    setAlertStatus,
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
          <TodoAdd
            setOpenModal={setOpenModal}
            setFormStatus={setFormStatus}
            setTodoEdit={setTodoEdit}
          />
        </TodoMiddle>
        <TodoList
          searchedTodos={searchedTodos}
          searchText={searchValue}
          totalTodos={totalTodos}
          onEmptyTodos={() => (
            <EmptyTodos
              setOpenModal={setOpenModal}
              setFormStatus={setFormStatus}
              setTodoEdit={setTodoEdit}
            />
          )}
          onNotFoundTodos={() => <NotFoundTodos searchText={searchValue} />}
        >
          <ul>
            {searchedTodos.map(({ completed, text, id }) => (
              <TodoItem
                key={text}
                id={id}
                completed={completed}
                text={text}
                onComplete={() => completeTodo(id)}
                onDelete={() => deleteTodo(id)}
                onOpenEdit={() => openModeEditTodo(id)}
              />
            ))}
          </ul>

          <TodoModal
            openModal={openModal}
            addTodo={addTodo}
            setOpenModal={setOpenModal}
            todo={todoEdit}
            editTodo={editTodo}
            edit={formStatus}
            setShowAlert={setShowAlert}
            setAlertStatus={setAlertStatus}
          />
        </TodoList>
        {!!showAlert && <TodoAlert alertStatus={alertStatus}></TodoAlert>}
      </div>
    </main>
  );
}

export default App;
