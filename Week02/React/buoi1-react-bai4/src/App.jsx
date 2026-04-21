import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Alert from './components/Alert'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{ padding: '40px', maxWidth: '500px', margin: '0 auto' }}>
      <Alert 
        type="success" 
        message="Thành công: Cập nhật hệ thống hoàn tất!" 
      />
      <Alert 
        type="warning" 
        message="Cảnh báo: Máy chủ đang quá tải." 
      />
      <Alert 
        type="error" 
        message="Lỗi: Không thể kết nối đến cơ sở dữ liệu." 
      />

    </div>
    </>
  )
}

export default App
