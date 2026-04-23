import TodoItem from './TodoItem';

export default function TodoList({ todos, deleteTodo }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {todos.map((todo, index) => (
        <TodoItem 
          key={index} 
          task={todo} 
          onDelete={() => deleteTodo(index)} 
        />
      ))}
    </ul>
  );
}