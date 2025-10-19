import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import './Home.css';

const Home = () => {
  // State to track current view mode
  const [currentView, setCurrentView] = useState(1);

  // Handle view change
  const handleViewChange = (viewNumber) => {
    setCurrentView(viewNumber);
  };

  // Sample clothing data with ZARA-style items
  const clothingItems = [
    {
      id: 1,
      name: "100% FEATHER WATER-REPELLENT PUFFER JACKET",
      price: "৳14,280",
      image: `${process.env.PUBLIC_URL}/assets/Burka1.jpg`,
      category: "PUFFERS"
    },
    {
      id: 2,
      name: "TEXTURED JACQUARD JACKET",
      price: "৳9,594",
      image: `${process.env.PUBLIC_URL}/assets/Burka2.jpg`,
      category: "BOMBER"
    },
    {
      id: 3,
      name: "ABSTRACT JACQUARD JACKET",
      price: "৳9,594",
      image: `${process.env.PUBLIC_URL}/assets/Burka3.jpg`,
      category: "LEATHER EFFECT"
    },
    {
      id: 4,
      name: "CONTRAST COLLAR POLO SWEATSHIRT",
      price: "৳4,794",
      image: `${process.env.PUBLIC_URL}/assets/Burka4.jpg`,
      category: "SWEATSHIRTS"
    },
    {
      id: 5,
      name: "RELAXED FIT TROUSERS",
      price: "৳5,514",
      image: `${process.env.PUBLIC_URL}/assets/Burka5.jpg`,
      category: "TROUSERS"
    },
    {
      id: 6,
      name: "LEATHER PENNY LOAFERS",
      price: "৳10,794",
      image: `${process.env.PUBLIC_URL}/assets/Burka6.jpg`,
      category: "SHOES"
    },
    {
      id: 7,
      name: "LIGHTWEIGHT BOMBER JACKET",
      price: "৳7,194",
      image: "https://via.placeholder.com/400x600/34495E/FFFFFF?text=Navy+Bomber",
      category: "BOMBER"
    },
    {
      id: 8,
      name: "MERINO WOOL SWEATER",
      price: "৳5,994",
      image: "https://via.placeholder.com/400x600/641E16/FFFFFF?text=Wool+Sweater",
      category: "KNITWEAR"
    },
    {
      id: 9,
      name: "STRAIGHT FIT JEANS",
      price: "৳4,314",
      image: "https://via.placeholder.com/400x600/1B4F72/FFFFFF?text=Denim+Jeans",
      category: "DENIM"
    },
    {
      id: 10,
      name: "MINIMALIST SNEAKERS",
      price: "৳9,594",
      image: "https://via.placeholder.com/400x600/F8F9FA/333333?text=White+Sneakers",
      category: "SHOES"
    },
    {
      id: 11,
      name: "OVERSIZED BLAZER",
      price: "৳11,994",
      image: "https://via.placeholder.com/400x600/2E4057/FFFFFF?text=Navy+Blazer",
      category: "BLAZERS"
    },
    {
      id: 12,
      name: "BASIC T-SHIRT PACK",
      price: "৳2,394",
      image: "https://via.placeholder.com/400x600/FFFFFF/333333?text=White+Tee",
      category: "T-SHIRTS"
    }
  ];

  return (
    <div className="home">
      <div className="container">
        <div className="page-header">
          <div className="breadcrumb">
            <span>VIEW ALL</span>
          </div>
          <div className="view-options">
            <span>VIEW</span>
            <div className="view-toggles">
              <button 
                className={currentView === 1 ? 'active' : ''}
                onClick={() => handleViewChange(1)}
              >
                1
              </button>
              <button 
                className={currentView === 2 ? 'active' : ''}
                onClick={() => handleViewChange(2)}
              >
                2
              </button>
              <button 
                className={currentView === 3 ? 'active' : ''}
                onClick={() => handleViewChange(3)}
              >
                3
              </button>
            </div>
            <span>FILTERS</span>
          </div>
        </div>

        <div className={`products-grid view-${currentView}`}>
          {clothingItems.map(item => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>

        <div className="load-more">
          <button className="load-more-btn">LOAD MORE ITEMS</button>
        </div>
      </div>
    </div>
  );
};

export default Home;