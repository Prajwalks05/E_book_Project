import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

import './PrivateRoute.css';

const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth();
  const [showPopup, setShowPopup] = useState(false);
  const [redirectToLogin, setRedirectToLogin] = useState(false);

  // When user is not logged in, show popup and set redirect flag
  useEffect(() => {
    if (!currentUser && !showPopup) {
      setShowPopup(true);
    }
  }, [currentUser, showPopup]);

  // Handle popup close action
  const handlePopupClose = () => {
    setShowPopup(false);
    setRedirectToLogin(true); // Set flag to redirect after closing the popup
  };

  // Redirect user to login after popup is closed
  if (redirectToLogin) {
    return <Navigate to="/Login" />;
  }

  if (!currentUser) {
    return (
      <>
        {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <h2>Please log in to access this page</h2>
              <button onClick={handlePopupClose}>Close</button>
            </div>
          </div>
        )}
      </>
    );
  }

  return children;
};

export default PrivateRoute;
