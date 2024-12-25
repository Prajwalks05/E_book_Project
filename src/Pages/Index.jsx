import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'

const Index = () => {
  // Default reviews data
  const [reviews, setReviews] = useState([
    { id: 1, name: 'Kumud Raj Ghimire', review: 'Amazing platform! The books are great.', rating: 5 },
    { id: 2, name: 'Jane Smith', review: 'A lot of variety in genres. Very user-friendly!', rating: 4 },
    { id: 3, name: 'Bob Brown', review: 'I love how easy it is to download books. Highly recommend!', rating: 3 },
  ]);

  return (
    <div>
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

      {/* Billboard Section */}
      <section id="billboard">
        <div className="row align-items-center g-0 bg-light">
          <div className="col-lg-6">
            <div className="m-4 p-4 m-lg-5 p-lg-5">
              <h6 className="text-black"><span className="text-primary">#</span>1 Best App for E-books</h6>
              <h2 className="display-4 fw-bold text-dark my-4">Get books at your fingertips</h2>
              <a href="#" className="btn btn-success btn-bg btn-slide hover-slide-right mt-4">
                <span className="text-success text-light">Get Started</span>
              </a>
            </div>
          </div>
          <div className="col-lg-6 mt-5">
            <img src="images/billboard.jpg" alt="img" className="img-fluid" />
          </div>
        </div>

        <div className="row align-items-center bg-light">
          <div className="col-sm-4">
            <img className="img-fluid" src="images/about.png" alt="img" />
          </div>
          <div className='col-sm-8'>
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

        {/* Features Section */}
        <div className="row">
          <div className="card border-0 col-sm">
            <img className="card-img-top" src="/images/feature3.jpg" style={{ width: '300px', height: '300px' }} alt="Card image" />
            <div className="card-body">
              <h4 className="card-title">Zero Downtime</h4>
            </div>
          </div>
          <div className="card border-0 col-sm">
            <img className="card-img-top" src="./images/feature2.jpg" style={{ width: '300px', height: '300px' }} alt="Card image" />
            <div className="card-body">
              <h4 className="card-title">User -Friendly</h4>
            </div>
          </div>
          <div className="card border-0 col-sm">
            <img className="card-img-top" src="./images/feature1.jpg" style={{ width: '300px', height: '300px' }} alt="Card image" />
            <div className="card-body">
              <h4 className="card-title">Ad-Free Experience</h4>
            </div>
          </div>
          <div className="card border-0 col-sm">
            <img className="card-img-top" src="./images/feature4.png" style={{ width: '300px', height: '300px' }} alt="Card image" />
            <div className="card-body">
              <h4 className="card-title">Responsive Design</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Categories Section */}
      <section id="popular-categories" className="mt-5">
        <div className="container">
          <h3 className="fw-bold text-info">Popular Categories</h3>
          <div className="row">
            {/* Category 1 - Comics */}
            <div className="col-md-4 mb-4">
              <div className="card border-0">
                <img className="card-img-top" src="/images/comic.avif" alt="Comics" style={{ height: '200px', objectFit: 'cover' }} />
                <div className="card-body">
                  <h4 className="card-title">Comics</h4>
                  <p className="card-text">Explore a vast collection of graphic novels, manga, and superhero comics.</p>
                  <Link to="/Categories.jsx" className="btn btn-primary">Browse Comics</Link>
                </div>
              </div>
            </div>

            {/* Category 2 - Devotional */}
            <div className="col-md-4 mb-4">
              <div className="card border-0">
                <img className="card-img-top" src="/images/devotional.jpeg" alt="Devotional" style={{ height: '200px', objectFit: 'cover' }} />
                <div className="card-body">
                  <h4 className="card-title">Devotional</h4>
                  <p className="card-text">Dive into spiritual books, religious texts, and meditation guides.</p>
                  <Link to="/Categories.jsx" className="btn btn-primary">Browse Devotional</Link>
                </div>
              </div>
            </div>

            {/* Category 3 - Education */}
            <div className="col-md-4 mb-4">
              <div className="card border-0">
                <img className="card-img-top" src="/images/education.jpeg" alt="Education" style={{ height: '200px', objectFit: 'cover' }} />
                <div className="card-body">
                  <h4 className="card-title">Education</h4>
                  <p className="card-text">Access a wide range of academic books, textbooks, and study materials.</p>
                  <Link to="/Categories.jsx" className="btn btn-primary">Browse Education</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Reviews Section */}
      <div className="container mt-5">
        <h3 className="fw-bold text-info">User Reviews</h3>
        <div className="row">
          {reviews.map((review) => (
            <div key={review.id} className="col-md-4 mb-4">
              <div className="card border-0">
                <div className="card-body">
                  <h5 className="card-title">{review.name}</h5>
                  <p className="card-text">{review.review}</p>
                  <p><strong>Rating:</strong> {"⭐".repeat(review.rating)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>







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
