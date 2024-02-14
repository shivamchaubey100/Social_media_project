import Card from './components/Card/Card.jsx';
import Signup from './components/Signup/Signup.jsx';
import DarkModeSwitch from './components/DarkModeSwitch/DarkModeSwitch.jsx';
import './App.css';
import './mediaqueries.css';
import { useEffect, useState } from 'react';

function App() {
  
  const [darkMode,setDarkMode] = useState(false);
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    document.body.classList.toggle('darkMode', darkMode);
  },[darkMode])

  useEffect(() => {
    fetch("server-name")
      .then(async function(res) {
        const json = await res.json();
        setUserCount(json.userCount);
      })
  })

  function handleSubmit(e) {
    const formData = new FormData(e.target);

    const data = {
      username: formData.get('username'),
      password: formData.get('password'),
      roll: formData.get('roll'),
      confirm: formData.get('confirm'),
      userId: userCount
    }

    console.log(data)

    e.preventDefault();
  }

  return (
    <div className='main'>
      <Card darkMode={ darkMode } id='signup-card'>
        <Signup darkMode = { darkMode } handleSubmit={ handleSubmit } userCount={ userCount } setUserCount={ setUserCount }></Signup>
      </Card>

      <DarkModeSwitch darkMode={ darkMode } onChange={() => {setDarkMode(!darkMode)}}></DarkModeSwitch>
    </div>
  )
}

export default App
