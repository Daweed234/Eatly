import React from 'react'
import './App.css';
import Navbar from './Components/Navbar'
import Background from './Components/Background';
import Hero from './Components/Hero';
import Test from './Components/Test';
import Program from './Components/Program';

function App(){
  return (
    <div>
      <Navbar />
      <Hero />
      <Program />
      <Test />
{/* <Background /> */}
    </div>
  )
}


export default App
