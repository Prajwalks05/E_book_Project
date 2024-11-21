import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about-us">
      <div className="container">
        <div className="row g-md-5 align-items-center">
          <div className="col-lg-5">
            <div>
              <img className="img-fluid" src="images/about.png" alt="About Us" />
            </div>
          </div>

          <div className="col-lg-7 mt-5">
            <h6>
              <span className="text-primary">|</span>About Us
            </h6>
            <h3 className="display-6 fw-bold mb-4 text-info">Welcome to Our E-book Service!</h3>
            <p>
              <h2>BookByte: Revolutionizing Learning with eBooks</h2>
              BookByte is a transformative platform that makes learning more accessible and engaging 
              for students through the power of eBooks. BookByte offers a comprehensive learning 
              toolkit designed to enhance your educational journey. Whether you're gearing up for exams, 
              navigating assignments, or exploring additional study materials, BookByte is your trusted partner for academic excellence, proudly endorsed by BMSCE.
            </p>
            <p className="fw-semibold m-0">Our Mission</p>
            <p>
              At our eBook service, our mission is to provide readers with free access to high-quality literature and
              educational resources. We strive to enhance your reading experience by offering a diverse selection of
              eBooks, catering to all genres and interests. Whether you're downloading the latest bestsellers, exploring
              academic texts, or indulging in classic novels, we are your trusted source for all things eBooks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
