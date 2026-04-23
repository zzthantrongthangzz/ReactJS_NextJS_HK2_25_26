export default function TodoItem({ task, onDelete }) {
  return (
    <li style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', borderBottom: '1px solid #eee' }}>
      {task}
      <button onClick={onDelete} style={{ color: 'red', cursor: 'pointer' }}>Xóa</button>
    </li>
  );
}