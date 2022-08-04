import {useState} from 'react'
import { useNavigate } from "react-router-dom";

function Login({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const navigate = useNavigate();
  
    function handleSubmit(e) {
      e.preventDefault();
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password}),
      })
        .then((r) => r.json())
        .then((user) => onLogin(user));
    }

    function handleCreateAccount(){
        navigate("/SignUp")
    }
  
    return (
    <div className="form-div">
    <form onSubmit={handleSubmit}>
      <label className="form-label" htmlFor="username">Username:</label>
      <input
        className="form-input"
        placeholder="Username"
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label className="form-label" htmlFor="email">Email:</label>
      <label className="form-label" htmlFor="password">Password:</label>
      <input
        className="form-input"
        placeholder="Password"
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="form-button" type="submit">Submit</button>
    </form>
    <button className="new-user-button" onClick={handleCreateAccount}>Sign Up</button>
    </div>
    );
  }

  export default Login