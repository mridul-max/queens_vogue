import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import './Home.css';

const Home = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  // State to track current view mode
  const [currentView, setCurrentView] = useState(1);
  // State to track how many products to display
  const [visibleProducts, setVisibleProducts] = useState(8);
  // State to track selected category
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  // Update category when URL parameter changes
  useEffect(() => {
    if (categoryParam) {
      // Convert URL param to category format
      const categoryMap = {
        'all': 'ALL',
        'dubai-abaya': 'DUBAI ABAYA',
        'kimono': 'KIMONO',
        'farasha': 'FARASHA',
        'thai-gown': 'THAI GOWN',
        'thai-co-ords': 'THAI CO-ORDS',
        'hijab': 'HIJAB',
        'accessories': 'ACCESSORIES'
      };
      setSelectedCategory(categoryMap[categoryParam] || 'ALL');
      setVisibleProducts(8); // Reset visible products when category changes
    } else {
      setSelectedCategory('ALL');
    }
  }, [categoryParam]);

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
      price: "৳4,400",
      image: `${process.env.PUBLIC_URL}/assets/Burka1.jpg`,
      video: `${process.env.PUBLIC_URL}/assets/BurkaVideo1.mp4`,
      category: "DUBAI ABAYA"
    },
    {
      id: 2,
      name: "Premium Black Pattern Burka",
      price: "৳4,400",
      image: `${process.env.PUBLIC_URL}/assets/Burka2.jpg`,
      category: "DUBAI ABAYA"
    },
    {
      id: 3,
      name: "Traditional Floral Design Burka",
      price: "৳5,500",
      image: `${process.env.PUBLIC_URL}/assets/Burka3.jpg`,
      category: "FARASHA"
    },
    {
      id: 4,
      name: "Sophisticated Black Burka",
      price: "৳4,400",
      image: `${process.env.PUBLIC_URL}/assets/Burka4.jpg`,
      category: "FARASHA"
    },
    {
      id: 5,
      name: "Classic Modest Burka",
      price: "৳4,800",
      image: `${process.env.PUBLIC_URL}/assets/Burka5.jpg`,
      category: "DUBAI ABAYA"
    },
    {
      id: 6,
      name: "Luxurious Black Embellished Burka",
      price: "৳5,500",
      image: `${process.env.PUBLIC_URL}/assets/Burka6.jpg`,
      category: "DUBAI ABAYA"
    },
    {
      id: 7,
      name: "Contemporary Designed Burka",
      price: "৳2,800",
      image: `${process.env.PUBLIC_URL}/assets/Burka7.jpg`,
      category: "THAI GOWN"
    },
    {
      id: 8,
      name: "Modern Style Burka",
      price: "৳2,800",
      image: `${process.env.PUBLIC_URL}/assets/Burka8.jpg`,
      category: "THAI GOWN"
    },
    {
      id: 9,
      name: "Graceful Black Burka",
      price: "৳2,600",
      image: `${process.env.PUBLIC_URL}/assets/Burka9.jpg`,
      category: "THAI GOWN"
    },
    {
      id: 10,
      name: "Designer Pattern Burka",
      price: "৳2,600",
      image: `${process.env.PUBLIC_URL}/assets/Burka10.jpg`,
      category: "THAI GOWN"
    },
    {
      id: 11,
      name: "Premium Collection Burka",
      price: "৳2,700",
      image: `${process.env.PUBLIC_URL}/assets/Burka11.jpg`,
      category: "THAI GOWN"
    },
    {
      id: 12,
      name: "Burgundy Floral Pattern Dress",
      price: "৳2,500",
      image: `${process.env.PUBLIC_URL}/assets/Burka12.jpg`,
      category: "THAI GOWN"
    },
    {
      id: 13,
      name: "Geometric Black & White Dress",
      price: "৳2,500",
      image: `${process.env.PUBLIC_URL}/assets/Burka13.jpg`,
      category: "THAI GOWN"
    },
    {
      id: 14,
      name: "Modern Geometric Pattern Dress",
      price: "৳2,800",
      image: `${process.env.PUBLIC_URL}/assets/Burka14.jpg`,
      category: "THAI GOWN"
    },
    {
      id: 15,
      name: "Gradient Ombre Dress - Green",
      price: "৳2,800",
      image: `${process.env.PUBLIC_URL}/assets/Burka15.jpg`,
      category: "THAI GOWN"
    },
    {
      id: 16,
      name: "Chevron Stripe Set - Multi Color",
      price: "৳2,800",
      image: `${process.env.PUBLIC_URL}/assets/Burka16.jpg`,
      category: "THAI GOWN"
    },
    {
      id: 17,
      name: "Gradient Ombre Dress - Pink",
      price: "৳2,700",
      image: `${process.env.PUBLIC_URL}/assets/Burka17.jpg`,
      category: "THAI GOWN"
    },
    {
      id: 18,
      name: "Pleated Style Dress Collection",
      price: "৳2,500",
      image: `${process.env.PUBLIC_URL}/assets/Burka18.jpg`,
      category: "THAI GOWN"
    },
    {
      id: 19,
      name: "Pink Embroidered Traditional Dress",
      price: "৳2,800",
      image: `${process.env.PUBLIC_URL}/assets/Burka19.jpg`,
      category: "THAI GOWN"
    },
    {
      id: 20,
      name: "Zebra Leaf Pattern Dress",
      price: "৳2,800",
      image: `${process.env.PUBLIC_URL}/assets/Burka20.jpg`,
      category: "THAI GOWN"
    },
    {
      id: 21,
      name: "Black & White Stripe Dress",
      price: "৳3,800",
      image: `${process.env.PUBLIC_URL}/assets/Burka21.jpg`,
      category: "THAI GOWN"
    },
    {
      id: 22,
      name: "Burgundy Embroidered Dress",
      price: "৳2,500",
      image: `${process.env.PUBLIC_URL}/assets/Burka22.jpg`,
      category: "THAI GOWN"
    },
    {
      id: 23,
      name: "Black Embroidered Traditional Dress",
      price: "৳3,800",
      image: `${process.env.PUBLIC_URL}/assets/Burka23.jpg`,
      category: "THAI GOWN"
    }
  ];

  // Filter products based on selected category
  const filteredItems = selectedCategory === 'ALL' 
    ? clothingItems 
    : clothingItems.filter(item => item.category === selectedCategory);

  return (
    <div className="home">
      <div className="container">
        <div className="page-header">
          <div className="breadcrumb">
            <span>{selectedCategory === 'ALL' ? 'VIEW ALL' : selectedCategory}</span>
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
          {filteredItems.slice(0, visibleProducts).map(item => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>

        {visibleProducts < filteredItems.length && (
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