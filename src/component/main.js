import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../main.css"

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    
    if (username === 'example' && password === 'password') {
      navigate('/ecom');
    }
  };


  return (
    <div className='login1'>
      <div className='login2'>
    <h2>Login</h2>
    <label>
      Username:
      <input type="text" value={username} onChange={handleUsernameChange}  placeholder='USERNAME'/>
    </label>
    <br />
    <label>
      Password:
      <input type="password" value={password} onChange={handlePasswordChange} placeholder='PASSWORD' />
    </label>
    <br />
    <button onClick={handleLogin}>Login</button>
    </div>
  </div>
  );
};

export default Login;
