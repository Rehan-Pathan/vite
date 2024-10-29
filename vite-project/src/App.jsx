import { useState } from 'react'
import './App.css'


import Profile from './component/profile'
function App() {
  
const [color,change]=useState(true)


const changeColor=()=>{
  if(color)
  {
    document.body.bgColor='#00000';
  }
  else
  {
    document.body.bgColor='#FFFFF'
  }
  change(!color)
}

  
  return (
    <div className='space-y-4'>
    <button onClick={changeColor}>Change theme</button>

<div className='flex flex-wrap gap-4 justify-center'>

     <Profile 
        name="Alex Kim"
        title="UI/UX Designer"
        bio="Focuses on creating intuitive and beautiful interfaces."
        imgSrc="https://via.placeholder.com/150"
        bgColor="bg-yellow-200"
      />
      <Profile
        name="Alex Kim"
        title="UI/UX Designer"
        bio="Focuses on creating intuitive and beautiful interfaces."
        imgSrc="https://via.placeholder.com/150"
        bgColor="bg-yellow-200"
      />
    </div>  
      
      
      
    </div>
  )
}

export default App
