import React from 'react';
import './RecommendedProducts.css';
const recommendedProducts = [
    { id: 1, name: 'Product 1', price: '$29.99', image: 'https://thumbs.dreamstime.com/b/macro-view-cricket-bat-hitting-cricket-ball-cricket-sport-background-generative-ai-macro-view-cricket-bat-hitting-315221907.jpg' },
    { id: 2, name: 'Product 2', price: '$39.99', image: 'https://thumbs.dreamstime.com/b/macro-view-cricket-bat-hitting-cricket-ball-cricket-sport-background-generative-ai-macro-view-cricket-bat-hitting-315221907.jpg' },
    { id: 3, name: 'Product 3', price: '$39.99', image: 'https://thumbs.dreamstime.com/b/macro-view-cricket-bat-hitting-cricket-ball-cricket-sport-background-generative-ai-macro-view-cricket-bat-hitting-315221907.jpg' },
    { id: 4, name: 'Product 4', price: '$39.99', image: 'https://thumbs.dreamstime.com/b/macro-view-cricket-bat-hitting-cricket-ball-cricket-sport-background-generative-ai-macro-view-cricket-bat-hitting-315221907.jpg' },
    { id: 5, name: 'Product 5', price: '$39.99', image: 'https://thumbs.dreamstime.com/b/macro-view-cricket-bat-hitting-cricket-ball-cricket-sport-background-generative-ai-macro-view-cricket-bat-hitting-315221907.jpg' },
    { id: 6, name: 'Product 6', price: '$39.99', image: 'https://thumbs.dreamstime.com/b/macro-view-cricket-bat-hitting-cricket-ball-cricket-sport-background-generative-ai-macro-view-cricket-bat-hitting-315221907.jpg' },
    // Add more recommended products here
  ];
  

const RecommendedProducts = () => {
  return (
    <div className="recommended-products">
      <h2>Recommended Products</h2>
      <div className="products-grid">
        {recommendedProducts.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <div className="product-details">
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
            <div className="button-container">
              <button className="add-to-cart">Add to Cart</button>
              <button className="add-to-cart">Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedProducts;
