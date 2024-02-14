import Card from './components/Card/Card.jsx';
import Signup from './components/Signup/Signup.jsx';
import DarkModeSwitch from './components/DarkModeSwitch/DarkModeSwitch.jsx';
import './App.css';
import './mediaqueries.css';
import { useEffect, useState } from 'react';

function App() {
  
  const [darkMode,setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('darkMode', darkMode);
  },[darkMode])

  useEffect(() => {
    fetch("server-name")
      .then(async function(res) {
        const json = await res.json();
        userCount = json.users.length;
      })
  },[])

  function handleSubmit(e) {
    const formData = new FormData(e.target);

    const data = {
      username: formData.get('username'),
      password: formData.get('password'),
      roll: formData.get('roll'),
      // confirm: formData.get('confirm'),
      userId: userCount + 1,
    }

    console.log(JSON.stringify(data));

    e.preventDefault();

    fetch("server-name", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data),
    })
      .then(async function(res) {
        const json = await res.json();
      })
  }

  return (
    <div className='main'>
      <Card darkMode={ darkMode } id='signup-card'>
        <Signup darkMode = { darkMode } handleSubmit={ handleSubmit }></Signup>
      </Card>

      <DarkModeSwitch darkMode={ darkMode } onChange={() => {setDarkMode(!darkMode)}}></DarkModeSwitch>
    </div>
  )
}

export default App
