// ProductDetailPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import SmartContract from './SmartContract';
import TextToImage from './TextToImage';
import SmartContent from './SmartContent';

const ProductDetailPage = () => {
  // Access the productId from the URL parameters
  const { productId } = useParams();
  return (
    <div>
      {productId === "smart-contract" && <SmartContract />}
      {productId === "text-to-images" && <TextToImage />}
      {productId === "smart-content" && <SmartContent />}
      {/* Additional details for the specific product */}
    </div>
  );
};

export default ProductDetailPage;
