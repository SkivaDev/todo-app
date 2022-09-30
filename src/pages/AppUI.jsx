import TodoHeader from '../components/TodoHeader';
import TodoList from '../components/TodoList';
import TodoMiddle from '../components/TodoMiddle';
import '../styles/pages/App.css';


function AppUI() {
  return (
    <main>
      <div>
        <TodoHeader />
        <TodoMiddle />
        <TodoList />
        <div id='modal'>
          
        </div>
      </div>
    </main>
  )
}

export default AppUI