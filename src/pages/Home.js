import React from 'react';
import ProductCard from '../components/ProductCard';
import './Home.css';

const Home = () => {
  // Sample clothing data with ZARA-style items
  const clothingItems = [
    {
      id: 1,
      name: "Faux Fur Hooded Jacket",
      price: "€89.95",
      image: "https://via.placeholder.com/400x600/F5F5DC/8B4513?text=Beige+Fur+Jacket",
      category: "PUFFERS"
    },
    {
      id: 2,
      name: "Faux Fur Bomber Jacket",
      price: "€79.95",
      image: "https://via.placeholder.com/400x600/808080/FFFFFF?text=Grey+Fur+Jacket",
      category: "BOMBER"
    },
    {
      id: 3,
      name: "Oversized Faux Fur Coat",
      price: "€99.95",
      image: "https://via.placeholder.com/400x600/D3D3D3/696969?text=Light+Grey+Coat",
      category: "PUFFERS"
    },
    {
      id: 4,
      name: "Leather Effect Jacket",
      price: "€69.95",
      image: "https://via.placeholder.com/400x600/000000/FFFFFF?text=Black+Leather+Jacket",
      category: "LEATHER EFFECT"
    },
    {
      id: 5,
      name: "Denim Oversized Jacket",
      price: "€59.95",
      image: "https://via.placeholder.com/400x600/4169E1/FFFFFF?text=Denim+Jacket",
      category: "DENIM"
    },
    {
      id: 6,
      name: "Water Repellent Windbreaker",
      price: "€49.95",
      image: "https://via.placeholder.com/400x600/228B22/FFFFFF?text=Green+Windbreaker",
      category: "WINDBREAKERS"
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
              <button className="active">1</button>
              <button>2</button>
              <button>3</button>
            </div>
            <span>FILTERS</span>
          </div>
        </div>

        <div className="products-grid">
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