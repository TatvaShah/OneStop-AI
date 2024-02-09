// ProductsPage.js
import React from 'react';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

const ProductsPage = () => {
  return (
    <div>
      <h1>Our Products</h1>
      <div className="product-list">
        <Link to="/product/smart-contract" style={{ textDecoration: 'none' }}>
          <ProductCard title="Smart Contract Creating" description="Automate your smart contract creation process." />
        </Link>
        <Link to="/product/text-to-images" style={{ textDecoration: 'none' }}>
          <ProductCard title="Text to Images" description="Transform text into stunning visual content." />
        </Link>
        <Link to="/product/ai-content-generation" style={{ textDecoration: 'none' }}>
          <ProductCard title="AI Content Generation" description="Generate high-quality AI-driven content effortlessly." />
        </Link>
      </div>
    </div>
  );
};

export default ProductsPage;
