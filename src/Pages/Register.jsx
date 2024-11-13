
import React, { useState } from 'react';
import { auth } from '../Firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './Register.css'; 

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/');  // Redirect to homepage or dashboard after registration
    } catch (error) {
      console.error("Error registering:", error.message);
    }
  };

  return (
    <div className="register-container">
      <h2>SignUp</h2>
      <form onSubmit={handleRegister} className="register-form">
      <div className="form-group">
          <label htmlFor="Name">Name:</label>
          <input
            type="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="register-button">Submit</button>
      </form>
    </div>
  );
}

export default SignUp;