import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'
import Inbox from './components/Inbox'
import Login from './components/Login'

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (user) {
    return <Inbox user={user}/>;
  } else {
    return <Login onLogin={setUser} />;
  }
}

export default App;
