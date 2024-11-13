import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6">
          <div className="rectangle">
            <h4 className="title">Can't Find Your Favorite eBook?</h4>
            <p>
              We're always expanding our library and would love to add the books you're looking for! If you have a
              specific eBook in mind, let us know, and we'll try to make it available for you.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeOIMJd1kLYEFm0itrnx6t5ueKmVxNy4xIRdZxTpLWbUFcJow/viewform?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              Request an eBook
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
