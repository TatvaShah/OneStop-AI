// ProductDetailPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailPage = () => {
  // Access the productId from the URL parameters
  const { productId } = useParams();

  return (
    <div>
      <h1>{productId} Details</h1>
      {/* Additional details for the specific product */}
    </div>
  );
};

export default ProductDetailPage;
