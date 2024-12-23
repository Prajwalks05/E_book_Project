import React, { useState } from 'react';
import { auth } from '../Firebase';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';


import { Helmet } from 'react-helmet';

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
        navigate('/Index');
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

  // Google Sign-In Handler
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      setSuccessMessage('Successfully logged in with Google!');
      setTimeout(() => {
        setSuccessMessage('');
        navigate('/');
      }, 2000);
    } catch (error) {
      setErrorMessage('Error logging in with Google. Please try again.');
    }
  };

  return (
    <div className="container-fluid vh-100">
      <Helmet>
        <style>
          {`
            * {
              font-size: 18px;
            }
            .backimg {
              background-image: url("/public/images/login_bg.gif");
              background-repeat: no-repeat;
              background-size: cover;
            }
          `}
        </style>
      </Helmet>
      <div className="row h-100">
        {/* Welcome Section */}
        <div className="backimg col-md-6 d-flex flex-column justify-content-center align-items-center text-center bg-primary text-white p-5">
          <h1 className="display-4 fw-bold">Welcome to E-Book</h1>
          <p className="fs-5">Discover the best books to read</p>
        </div>

        {/* Login Section */}
        <div className="col-md-6 d-flex justify-content-center align-items-center bg-light">
          <div className="card p-4 shadow" style={{ width: '100%', maxWidth: '400px' }}>
            <h2 className="text-center mb-4">Login</h2>
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <div className="input-group">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                  </button>
                </div>
              </div>
              <button type="submit" className="btn btn-primary w-100 mt-3">
                Login
              </button>
            </form>
            {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
            {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>}

            <button
              className="btn d-flex align-items-center justify-content-center w-100 mt-3"
              style={{
                backgroundColor: '#000', // Black background
                color: '#fff',           // White text
                borderRadius: '20px',    // Rounded edges
                border: '1px solid #d9d9d9', // Light gray border
                height: '50px',          // Fixed height
              }}
              onClick={handleGoogleLogin}
            >
              <img
                src="\images\google.png"
                alt="Google Logo"
                style={{
                  width: '40px',
                  height: '40px',
                  marginRight: '10px',
                }}
              />
              <span>Sign in with Google</span>
            </button>



            <p className="mt-3 text-center">
              Don't have an account?{' '}
              <span
                className="text-primary fw-bold"
                style={{ cursor: 'pointer' }}
                onClick={handleRegister}
              >
                Sign Up
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
