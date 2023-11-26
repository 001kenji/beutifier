import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Logger from './JSX/Logger'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div id='importedLoggerDiv' >
      <Logger />
    </div>
    </>
  )
}

export default App
