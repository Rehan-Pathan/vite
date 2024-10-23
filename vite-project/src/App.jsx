import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const add=()=>{
    if(count<20)
    {
    setCount(count+1)
    }
  }


  const rem=()=>{
    if(count>0)
    {
      setCount(count-1);
    }
  }
  return (
    <>
     
      
      <div className="card">
        <div>Count is {count}</div>
        <button onClick={add}>
          Add
        </button>
        <br></br>
        <button onClick={rem}>
          Remove
        </button>
       
      </div>
      
    </>
  )
}

export default App
