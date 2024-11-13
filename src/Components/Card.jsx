// src/Card.js
import React from 'react';
import './Card.css'; // Import the CSS file for styling

const Card = ({ title, content }) => {
    return (
        <div className="card">
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    );
};

export default Card;