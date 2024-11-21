// src/components/SignOut.js
import React from 'react';
import { auth } from '../Firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './SignOut.css';

function SignOut() {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log("User signed out successfully");
      navigate('/Login'); // Redirect to login page after sign-out
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

  return (
    <button onClick={handleSignOut} className="signout-button">Sign Out</button>
  );
}

export default SignOut;
