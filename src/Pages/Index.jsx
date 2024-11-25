import React from 'react';
import { createClient } from '@supabase/supabase-js';

import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import './Index.css';



const Index = () => {
  return (
    <div>

      <section id="billboard">
        <div className="row align-items-center g-0 bg-secondary">
          <div className="col-lg-6">
            <div className="m-4 p-4 m-lg-5 p-lg-5">
              <h6 className="text-white"><span className="text-primary">#</span>1 Best App for E-books</h6>
              <h2 className="display-4 fw-bold text-white my-4">Get books at your fingertips</h2>
              <a href="#" className="btn btn-success btn-bg btn-slide hover-slide-right mt-4">
                <span className="text-success">Get Started</span>
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <img src="images/billboard.jpg" alt="img" className="img-fluid" />
          </div>
        </div>
      </section>

      <section id="about-us">
        <div className="container">
          <div className="row g-md-5 align-items-center">
            <div className="col-lg-5">
              <img className="img-fluid" src="images/about.png" alt="img" />
            </div>
            <div className="col-lg-7 mt-5">
              <h6><span className="text-primary">|</span> About Us</h6>
              <h3 className="display-6 fw-bold mb-4 text-info">Welcome to Our E-book Service!</h3>
              <p>
                Discover a world of knowledge and entertainment at your fingertips! We take pride in being a leading
                provider of free eBook downloads, catering to a wide range of readers from different backgrounds. Our team
                is dedicated to offering an extensive collection of eBooks, ensuring that your reading experience is both
                enjoyable and accessible.
              </p>
              <p className="fw-semibold m-0">Our Mission</p>
              <p>
                At our eBook service, our mission is to provide readers with free access to high-quality literature and
                educational resources. We strive to enhance your reading experience by offering a diverse selection of
                eBooks, catering to all genres and interests. Whether you’re downloading the latest bestsellers, exploring
                academic texts, or indulging in classic novels, we are your trusted source for all things eBooks.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="m-5 row justify-content-center text-center">
          <div className="card border-0 col-lg-3">
            <img className="card-img-top" src="/images/feature3.avif" style={{ width: '300px', height: '300px' }} alt="Card image" />
            <div className="card-body">
              <h4 className="card-title">Instant Download</h4>
            </div>
          </div>
          <div className="card border-0 col-lg-3">
            <img className="card-img-top" src="./images/feature2.avif" style={{ width: '300px', height: '300px' }} alt="Card image" />
            <div className="card-body">
              <h4 className="card-title">User -Friendly</h4>
            </div>
          </div>
          <div className="card border-0 col-lg-3">
            <img className="card-img-top" src="./images/feature1.jfif" style={{ width: '300px', height: '300px' }} alt="Card image" />
            <div className="card-body">
              <h4 className="card-title">Ad-Free Experience</h4>
            </div>
          </div>
          <div className="card border-0 col-lg-3">
            <img className="card-img-top" src="./images/feature4.png" style={{ width: '300px', height: '300px' }} alt="Card image" />
            <div className="card-body">
              <h4 className="card-title">Responsive Design</h4>
            </div>
          </div>
        </div>
      </section>

      <footer className="m-1 text-light bg-dark text-lg-start">
        <div className="text-center p-3">
          © 2023 E-book Service. All rights reserved.
        </div>
      </footer>

      <script src="js/jquery-1.11.0.min.js"></script>
      <script type="text/javascript" src="js/bootstrap.bundle.min.js"></script>
      <script type="text/javascript" src="js/plugins.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js"></script>
      <script type="text/javascript" src="js/script.js"></script>
      <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
    </div>
  );
};

export default Index;
