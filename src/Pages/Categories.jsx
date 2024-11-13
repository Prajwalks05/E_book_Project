import React from 'react';
import Header from '../Components/Header';
import Card from '../Components/Card'; // Assuming you have a BookCard component
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Components/Card.jsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './Categories.css';

const Categories = () => {
  return (
    <div className="container">
      <Card
        title="Data Struct"
        content="Lorem ipsum dolor sit amet."
        img_url="https://via.placeholder.com/150" />
    </div>
  );
};

export default Categories;