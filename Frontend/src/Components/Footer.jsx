import React from 'react';
import { Icon } from '@iconify/react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <h5>About Us</h5>
            <p>
              We offer a wide range of eBooks in various genres for free. 
              Join our platform and enjoy unlimited reading.
            </p>
          </div>
          <div className="col-lg-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Home</a></li>
              <li><a href="#" className="text-white">Browse Books</a></li>
              <li><a href="#" className="text-white">About Us</a></li>
              <li><a href="#" className="text-white">Contact</a></li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h5>Contact Us</h5>
            <p>Email: abc12@gmail.com</p>
            <p>Phone: +91 987654321</p>
            <p>Address: Bangalore</p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12 text-center">
            <p>&copy; {new Date().getFullYear()} E-book Service. All rights reserved.</p>
            <div>
              <a href="#" className="text-white mx-2">
                <Icon icon="akar-icons:twitter-fill" width="24" height="24" />
              </a>
              <a href="#" className="text-white mx-2">
                <Icon icon="akar-icons:facebook-fill" width="24" height="24" />
              </a>
              <a href="#" className="text-white mx-2">
                <Icon icon="akar-icons:instagram-fill" width="24" height="24" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
