import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [data, setData] = useState([]);
  
  var url = "https://jsonplaceholder.typicode.com/users";




  useEffect(()=>{

    var fetchdata = fetch(url);
    fetchdata.then((res) =>{
      return res.json();
    }).then((data)=>{
      setData(data);
      console.log(data);
      return data;
    })
  },[]);

    

  return (
    <>
      {
        data.map((item)=>{
          return (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <h2>{item.email}</h2>
          </div>
          )
        })
      }
    </>
  )
}

export default App
