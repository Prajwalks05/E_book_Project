import React from 'react';
import {Link} from 'react-router-dom';

const Billboard = () => {
  return (
    <section id="billboard">
      <div className="row align-items-center g-0 bg-secondary">
        <div className="col-lg-6">
          <div className="m-4 p-4 m-lg-5 p-lg-5">
            <h6 className="text-white">
              <span className="text-primary">#</span>1 Best App for E-books
            </h6>
            <h2 className="display-4 fw-bold text-white my-4">
              Get books at your fingertips
            </h2>
            <a href="#" className="btn btn-success btn-bg btn-slide hover-slide-right mt-4">
              <span className="text-success">Get Started</span>
            </a>
          </div>
        </div>
        <div className="col-lg-6">
          <img src="images/billboard.jpg" alt="Billboard" className="img-fluid" />
        </div>
      </div>
    </section>
  );
};

export default Billboard


