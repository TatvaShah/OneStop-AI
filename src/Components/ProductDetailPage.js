// ProductDetailPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import SmartContract from './SmartContract';
import TextToImage from './TextToImage';

const ProductDetailPage = () => {
  // Access the productId from the URL parameters
  const { productId } = useParams();
console.log(productId, "productId");
  return (
    <div>
      {productId === "smart-contract" && <SmartContract />}
      {productId === "text-to-images" && <TextToImage />}
      {/* Additional details for the specific product */}
    </div>
  );
};

export default ProductDetailPage;
