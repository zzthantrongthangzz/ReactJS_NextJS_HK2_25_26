import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import StudentInfo from './components/StudentInfo'

function App() {
  const [count, setCount] = useState(0)
  const studentData = {
    name: "Thân Trọng Thắng",
    studentId: "23729371",
    className: "DHKTPM19B"
  };

  return (
    <>
      <div style={{ fontFamily: 'sans-serif' }}>
      <Header />
      
      <StudentInfo 
        name={studentData.name} 
        studentId={studentData.studentId} 
        className={studentData.className} 
      />
      
      <Footer />
    </div>
    </>
  )
}

export default App
