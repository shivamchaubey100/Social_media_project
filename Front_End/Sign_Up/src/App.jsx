import Card from './components/Card.jsx';
import Signup from './components/Signup.jsx';
import DarkModeSwitch from './components/DarkModeSwitch.jsx';
import './App.css';
import './mediaqueries.css';
import { useEffect, useState } from 'react';

function App() {
  
  const [darkMode,setDarkMode] = useState(false);
  useEffect(() => {
    document.body.classList.toggle('darkMode', darkMode);
  },[darkMode])

  return (
    <div className='main'>
      <Card darkMode={ darkMode } id='signup-card'>
        <Signup darkMode = { darkMode }></Signup>
      </Card>

      <DarkModeSwitch darkMode={ darkMode } onChange={() => {setDarkMode(!darkMode)}}></DarkModeSwitch>
    </div>
  )
}

export default App
