import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState(['Học React cơ bản', 'Làm bài tập Props']);
  const addTodo = (task) => {
    setTodos([...todos, task]);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <>
      <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '10px' }}>
      <h2 style={{ textAlign: 'center' }}>My Todo List</h2>
      
      <TodoInput addTodo={addTodo} />
      
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
    </>
  )
}

export default App
