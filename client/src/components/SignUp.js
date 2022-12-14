import { useState } from 'react'

function SignUp({ onLogin, setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        email,
        password_confirmation: passwordConfirmation,
      }),
    })
      .then((r) => r.json())
      .then(fetchForInbox);
  }

  function fetchForInbox() {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }

  return (
    <div className="form-div">
      <form onSubmit={handleSubmit}>
        <label className="form-label" htmlFor="username">Username:</label>
        <input className="form-input"
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label className="form-label" htmlFor="email">Email:</label>
        <input className="form-input"
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="form-label" htmlFor="password">Password:</label>
        <input className="form-input"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label className="form-label" htmlFor="password_confirmation">Confirm Password:</label>
        <input className="form-input"
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <button className="form-button" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SignUp