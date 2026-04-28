import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{ maxWidth: '500px', margin: '40px auto', fontFamily: 'sans-serif' }}>
      <h2 style={{ textAlign: 'center' }}>Redux Global Todo List</h2>
      <TodoInput />
      <TodoList />
    </div>
    </>
  )
}

export default App
