import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiUser } from 'react-icons/fi';
import { signOut } from 'firebase/auth';
import { auth } from '../Firebase';
// import './Header.css';
import { Helmet } from 'react-helmet';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [profilePic, setProfilePic] = useState("/images/default-profile.png");
  const [popupMessage, setPopupMessage] = useState('');
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogin = () => {
    navigate('/Login');
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setPopupMessage('Successfully logged out!');
      setTimeout(() => setPopupMessage(''), 3000);
      navigate('/Login');
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <header id="header">
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
      <section className="m-2"></section>
      <nav id="primary-header" className="navbar navbar-expand-lg py-3" style={{ backgroundImage: 'url(./images/Delicate.png)' }}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            <img src="/images/logo.png" height="60px" alt="Logo" className="d-inline-block align-text-top" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/Index">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Search">Search</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Categories">Categories</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">About</Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item account-dropdown">
                <button className="nav-link account-btn" onClick={toggleDropdown}>
                  <FiUser size={30} />
                </button>
                {isDropdownOpen && (
                  <div className="dropdown-menu show dropdown-menu-end">
                    <div className="dropdown-item">
                      <input type="file" onChange={handleProfilePicChange} style={{ display: 'none' }} id="profilePicInput" />
                      <label htmlFor="profilePicInput" className="profile-pic-label">
                        <img src={profilePic} alt="Profile" className="profile-pic" />
                        Change Profile Picture
                      </label>
                    </div>
                    <div className="dropdown-item" onClick={handleLogin}>Login</div>
                    <div className="dropdown-item" onClick={handleLogout}>Logout</div>
                  </div>
                )}
              </li>
            </ul>



          </div>
        </div>
      </nav>

      {popupMessage && (
        <div className="popup-message">
          <p>{popupMessage}</p>
        </div>
      )}
    </header>
  );
};

export default Header;
