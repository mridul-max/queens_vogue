import React, { useState } from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        <div className={`product-overlay ${isHovered ? 'visible' : ''}`}>
          <button className="add-to-bag">ADD TO BAG</button>
        </div>
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">{product.price}</p>
        <span className="product-category">{product.category}</span>
      </div>
    </div>
  );
};

export default ProductCard;