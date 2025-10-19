import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import './Home.css';

const Home = () => {
  // State to track current view mode
  const [currentView, setCurrentView] = useState(1);
  // State to track how many products to display
  const [visibleProducts, setVisibleProducts] = useState(8);

  // Handle view change
  const handleViewChange = (viewNumber) => {
    setCurrentView(viewNumber);
  };

  // Handle load more functionality
  const handleLoadMore = () => {
    setVisibleProducts(prev => prev + 6);
  };

  // Queen's Vogue Complete Product Collection - 23 Unique Items
  const clothingItems = [
    {
      id: 1,
      name: "Elegant Black Embroidered Burka",
      price: "৳8,500",
      image: `${process.env.PUBLIC_URL}/assets/Burka1.jpg`,
      video: `${process.env.PUBLIC_URL}/assets/BurkaVideo1.mp4`,
      category: "BURKA"
    },
    {
      id: 2,
      name: "Premium Black Pattern Burka",
      price: "৳9,200",
      image: `${process.env.PUBLIC_URL}/assets/Burka2.jpg`,
      category: "BURKA"
    },
    {
      id: 3,
      name: "Traditional Floral Design Burka",
      price: "৳7,800",
      image: `${process.env.PUBLIC_URL}/assets/Burka3.jpg`,
      category: "BURKA"
    },
    {
      id: 4,
      name: "Sophisticated Black Burka",
      price: "৳8,000",
      image: `${process.env.PUBLIC_URL}/assets/Burka4.jpg`,
      category: "BURKA"
    },
    {
      id: 5,
      name: "Classic Modest Burka",
      price: "৳7,500",
      image: `${process.env.PUBLIC_URL}/assets/Burka5.jpg`,
      category: "BURKA"
    },
    {
      id: 6,
      name: "Luxurious Black Embellished Burka",
      price: "৳9,800",
      image: `${process.env.PUBLIC_URL}/assets/Burka6.jpg`,
      category: "BURKA"
    },
    {
      id: 7,
      name: "Contemporary Designed Burka",
      price: "৳8,300",
      image: `${process.env.PUBLIC_URL}/assets/Burka7.jpg`,
      category: "BURKA"
    },
    {
      id: 8,
      name: "Modern Style Burka",
      price: "৳7,900",
      image: `${process.env.PUBLIC_URL}/assets/Burka8.jpg`,
      category: "BURKA"
    },
    {
      id: 9,
      name: "Graceful Black Burka",
      price: "৳8,400",
      image: `${process.env.PUBLIC_URL}/assets/Burka9.jpg`,
      category: "BURKA"
    },
    {
      id: 10,
      name: "Designer Pattern Burka",
      price: "৳9,000",
      image: `${process.env.PUBLIC_URL}/assets/Burka10.jpg`,
      category: "BURKA"
    },
    {
      id: 11,
      name: "Premium Collection Burka",
      price: "৳9,500",
      image: `${process.env.PUBLIC_URL}/assets/Burka11.jpg`,
      category: "BURKA"
    },
    {
      id: 12,
      name: "Burgundy Floral Pattern Dress",
      price: "৳6,800",
      image: `${process.env.PUBLIC_URL}/assets/Burka12.jpg`,
      category: "FLORAL"
    },
    {
      id: 13,
      name: "Geometric Black & White Dress",
      price: "৳7,200",
      image: `${process.env.PUBLIC_URL}/assets/Burka13.jpg`,
      category: "GEOMETRIC"
    },
    {
      id: 14,
      name: "Modern Geometric Pattern Dress",
      price: "৳7,500",
      image: `${process.env.PUBLIC_URL}/assets/Burka14.jpg`,
      category: "GEOMETRIC"
    },
    {
      id: 15,
      name: "Gradient Ombre Dress - Green",
      price: "৳6,200",
      image: `${process.env.PUBLIC_URL}/assets/Burka15.jpg`,
      category: "OMBRE"
    },
    {
      id: 16,
      name: "Chevron Stripe Set - Multi Color",
      price: "৳5,800",
      image: `${process.env.PUBLIC_URL}/assets/Burka16.jpg`,
      category: "SETS"
    },
    {
      id: 17,
      name: "Gradient Ombre Dress - Pink",
      price: "৳6,200",
      image: `${process.env.PUBLIC_URL}/assets/Burka17.jpg`,
      category: "OMBRE"
    },
    {
      id: 18,
      name: "Pleated Style Dress Collection",
      price: "৳5,500",
      image: `${process.env.PUBLIC_URL}/assets/Burka18.jpg`,
      category: "PLEATED"
    },
    {
      id: 19,
      name: "Pink Embroidered Traditional Dress",
      price: "৳8,800",
      image: `${process.env.PUBLIC_URL}/assets/Burka19.jpg`,
      category: "EMBROIDERED"
    },
    {
      id: 20,
      name: "Zebra Leaf Pattern Dress",
      price: "৳7,000",
      image: `${process.env.PUBLIC_URL}/assets/Burka20.jpg`,
      category: "PATTERN"
    },
    {
      id: 21,
      name: "Black & White Stripe Dress",
      price: "৳6,500",
      image: `${process.env.PUBLIC_URL}/assets/Burka21.jpg`,
      category: "STRIPES"
    },
    {
      id: 22,
      name: "Burgundy Embroidered Dress",
      price: "৳9,200",
      image: `${process.env.PUBLIC_URL}/assets/Burka22.jpg`,
      category: "EMBROIDERED"
    },
    {
      id: 23,
      name: "Black Embroidered Traditional Dress",
      price: "৳8,900",
      image: `${process.env.PUBLIC_URL}/assets/Burka23.jpg`,
      category: "EMBROIDERED"
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
          {clothingItems.slice(0, visibleProducts).map(item => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>

        {visibleProducts < clothingItems.length && (
          <div className="load-more">
            <button className="load-more-btn" onClick={handleLoadMore}>
              LOAD MORE ITEMS
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;