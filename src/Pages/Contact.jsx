import React from 'react';
import { Helmet } from 'react-helmet';
const Contact = () => {
  return (

    <div className="contact-container">
      <Helmet>
        <style>
          {`
            * {
              font-size: 18px;
            }
          `}
        </style>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
        />
      </Helmet>
      <div className=" card row justify-content-center align-items-center">
        <div className="col-md-6">
          <div className="rectangle">
            <h4 className="primary">Can't Find Your Favorite eBook?</h4>
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