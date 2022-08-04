import './App.css';
import {useEffect, useState} from 'react'
import Inbox from './components/Inbox'
import Login from './components/Login'
import {Route, Routes} from "react-router-dom";
import SignUp from './components/SignUp'


function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleLogout(){
    setUser(null)
  }

  if (user) {
    return <Inbox user={user} onLogout={handleLogout}/>;
  } else {
    return(
    <Routes>
      <Route path="/" element={<Login onLogin={setUser} />}/>
      <Route path="/login" element={<Login onLogin={setUser} />}/>
      <Route path="/SignUp" element={<SignUp/>}/>
    </Routes>)
  }
}

export default App;
