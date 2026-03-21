import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [data, setData] = useState([]);

  const [dataFilter, setDataFilter] = useState([]);

  const [searchValue, setsearchValue] = useState('');
  var url = "https://jsonplaceholder.typicode.com/posts";

  useEffect(()=>{
    async function fetchdata(){
      var res = await fetch(url);
      var data = await res.json();
      console.log(data);
      setData(data);
      setDataFilter(data);
    }
    fetchdata();
  },[])


  function handleSSearch(e){
  setsearchValue(e.target.value);

  var filter = data.filter((item)=>{
    return item.title.includes(e.target.value);
  });
  setDataFilter(filter);


  }

  return (
    <>
    <input type="text" value={searchValue} placeholder='Search' onChange={handleSSearch} />
    {
      
      dataFilter.map((item)=>{
        return <div key={item.id}>
          <h2>{item.title}</h2>
          <h2>{item.body}</h2>
        </div>
      })
    }
    
    </>
  )
}

export default App
