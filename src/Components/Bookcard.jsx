import React from 'react';
import { Link } from 'react-router-dom';
const Card = ({ title, content, img_url }) => {
  return (
    <Link><div className="card">
      <img src="$img_url" alt='Book Image'>{img_url}</img>
      <h2>{title}</h2>
      <p>{content}</p>
    </div></Link>
  );
};
export default Card;