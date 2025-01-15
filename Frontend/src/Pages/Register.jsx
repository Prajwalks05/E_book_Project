import React, { useState } from 'react';
import { auth } from '../Firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/'); // Redirect to homepage or dashboard after registration
    } catch (error) {
      console.error('Error registering:', error.message);
    }
  };

  const handleLogin = () => {
    navigate('/Login');
  };

  return (
    <div className="container-fluid vh-100 d-flex">
      {/* Welcome Section */}
      <Helmet>
        <style>
          {`
                  * {
                    font-size: 18px;
                  }
                    .backimg
                    {
                    background-image: url("/public/images/login_bg.gif");
                    background-repeat:no-repeat;
                    background-size:cover;
                  }
      
                `}
        </style>
      </Helmet>
      <div className=" row backimg col-md-6 d-flex flex-column justify-content-center align-items-center text-center bg-primary text-white">
        <h1 className="display-4 fw-bold">Welcome to E-Book</h1>
        <p className="fs-5">Discover the best books to read</p>
      </div>

      {/* Signup Section */}
      <div className="col-md-6 d-flex justify-content-center align-items-center">
        <div className="card p-4 shadow-lg" style={{ width: '100%', maxWidth: '400px' }}>
          <h2 className="text-center mb-4">Sign Up</h2>
          <form onSubmit={handleRegister}>
            <div className="form-group mb-3">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
            <div className="text-center mt-3">
              <span
                onClick={handleLogin}
                className="text-primary"
                style={{ cursor: 'pointer' }}
              >
                Back to Login
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
