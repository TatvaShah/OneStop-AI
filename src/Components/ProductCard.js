// ProductCard.js
import React from 'react';
import '../Styles/ProductCard.css';

const ProductCard = ({ title, description }) => {
  return (
    <div className="product-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ProductCard;
