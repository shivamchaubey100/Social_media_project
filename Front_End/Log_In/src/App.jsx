import Card from '../../Sign_Up/src/components/Card/Card'
import Login from './components/Login/Login'
import DarkModeSwitch from '../../Sign_Up/src/components/DarkModeSwitch/DarkModeSwitch'
import { useState, useEffect } from 'react'
import './App.css'
import './mediaqueries.css'

function App() {
  const [darkMode, setDarkMode] = useState(false);
  
  useEffect(() => {
    document.body.classList.toggle('darkMode', darkMode);
  },[darkMode])

  function handleSubmit(e) {
    const formData = new FormData(e.target);

    const data = {
      username: formData.get('username'),
      password: formData.get('password'),
      roll: formData.get('roll'),
      confirm: formData.get('confirm')
    }

    console.log(data)
    // console.log(userData);
    e.preventDefault();
  }


  return (
    <div className='main'>
    <Card darkMode={ darkMode } id="signup-card">
      <Login darkMode={ darkMode } handleSubmit={ handleSubmit }></Login>
    </Card>

    <DarkModeSwitch darkMode={ darkMode } onChange={() => setDarkMode(!darkMode)}></DarkModeSwitch>
    </div>
  )
}

export default App
