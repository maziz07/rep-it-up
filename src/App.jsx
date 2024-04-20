import { useState } from 'react'
import Hero from './components/Hero'
import Generator from './components/Generator'
import Workout from './components/Workout'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero />
      <Generator />
      <Workout />
    
    </>
  )
}

export default App
