import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='bg-yellow-900 h-screen  '>
      <h2 className=' text-xl font-bold text-center text-yellow-600 font-mono'>Welcome to TailwindCSS</h2>
     
      <div className='flex space-x-4 justify-center  '>
      <h3 className='bg-yellow-400 animate-spin   p-6 m-5 rounded-ss-full   '>haha</h3>
      
        <h2 className='bg-yellow-300 p-5 rounded-b m-5  '>hihi</h2>
        <h3 className='bg-yellow-200 animate-bounce  p-6 m-5 rounded-b-full  '>haha</h3>
       
        
      </div>

     </div>
    </>
  )
}

export default App
