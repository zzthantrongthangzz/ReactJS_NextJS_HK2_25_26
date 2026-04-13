import { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate('/dashboard/profile');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Trang Đăng Nhập</h2>
      <p>Cần đăng nhập để xem Profile và Orders.</p>
      <button onClick={handleLogin}>Đăng nhập ngay</button>
    </div>
  );
}