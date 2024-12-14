import React, { useState } from 'react';
import { auth } from '../Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { Helmet } from 'react-helmet';
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Clear previous messages
      setErrorMessage('');
      setSuccessMessage('');

      // Attempt to log in with provided credentials
      await signInWithEmailAndPassword(auth, email, password);

      // Show success message
      setSuccessMessage('Successfully logged in!');

      // Redirect to home page after 2 seconds
      setTimeout(() => {
        setSuccessMessage('');
        navigate('/');
      }, 2000);
    } catch (error) {
      // If error occurs, show the error message
      if (error.code === 'auth/invalid-email') {
        setErrorMessage('Invalid email format.');
      } else if (error.code === 'auth/user-not-found') {
        setErrorMessage('No user found with this email.');
      } else if (error.code === 'auth/wrong-password') {
        setErrorMessage('Incorrect password.');
      } else {
        setErrorMessage('Error logging in. Please try again.');
      }
    }
  };

  const handleRegister = () => {
    navigate('/Register');
  };

  return (
    <div className='container'>
      <Helmet>
        <style>
          {`
              * {
                font-size: 20px;
              }
            `}
        </style>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
        />
      </Helmet>
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin} className="login-form">
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
          <button type="submit" className="login-button">Login</button>
        </form>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        {successMessage && <div className="success-message">{successMessage}</div>}
        <p className="">
          Don't have an account? <span onClick={handleRegister} className="register-link register-button">Sign Up</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
