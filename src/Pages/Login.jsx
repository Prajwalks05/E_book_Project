import React, { useState } from 'react';
import { auth } from '../Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setErrorMessage('');
      setSuccessMessage('');

      await signInWithEmailAndPassword(auth, email, password);

      setSuccessMessage('Successfully logged in!');
      setTimeout(() => {
        setSuccessMessage('');
        navigate('/');
      }, 2000);
    } catch (error) {
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
    <div className="login-page">
      <div className="left-side">
        {/* You can place your image or text here */}
        <h1>Welcome to E-Book</h1>
        <p>Discover the best books to read</p>
      </div>

      <div className="right-side">
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
            <div className="form-group password-container">
              <label htmlFor="password">Password:</label>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                className="password-toggle"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </span>
            </div>
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          {successMessage && <div className="success-message">{successMessage}</div>}
          <p className="register-link">
            Don't have an account?{' '}
            <span onClick={handleRegister} className="register-button">
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
