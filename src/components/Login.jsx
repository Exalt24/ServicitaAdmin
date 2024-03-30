import React, { useState } from 'react';
import './../Login.css';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post('http://192.168.1.10:5000/admin/login', {
        username: username,
        password: password,
      });
      
      if (response.data.message === "Login successful") {
        navigate('/home');
        alert("Login successful");
      } else {
        alert("Login failed");
        console.log("Login failed");
      }
    } catch (error) {
      console.log(error);
    }
}


  return (
    <div className="login-login">

      <img src="side-logo.png" alt="logo" className="side-logo" />
      <h1 className="login-Servicita">Servicita</h1>
      <div className="login-login-container">
        <h1 className="login-Admin">Admin</h1>
        <h1 className="login-Loginword">Login</h1>
        <form>
          <label htmlFor="username" className="login-label">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login-input"
          />

          <label htmlFor="password" className="login-label">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />

          <button type="button" onClick={handleLogin} className="login-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;