import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  // Sample image data - replace with your actual images
  const imageCards = [
    {
      id: 1,
      title: 'Card 1',
      image: 'https://via.placeholder.com/300x200?text=Image+1',
      description: 'Description for card 1'
    },
    {
      id: 2,
      title: 'Card 2',
      image: 'https://via.placeholder.com/300x200?text=Image+2',
      description: 'Description for card 2'
    },
    {
      id: 3,
      title: 'Card 3',
      image: 'https://via.placeholder.com/300x200?text=Image+3',
      description: 'Description for card 3'
    },
    {
      id: 4,
      title: 'Card 4',
      image: 'https://via.placeholder.com/300x200?text=Image+4',
      description: 'Description for card 4'
    }
  ];

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Dashboard</h1>
      <div className="dashboard-container">
        {imageCards.map((card) => (
          <div key={card.id} className="image-card">
            <div className="image-card-image-wrapper">
              <img src={card.image} alt={card.title} className="image-card-img" />
            </div>
            <div className="image-card-content">
              <h3 className="image-card-title">{card.title}</h3>
              <p className="image-card-description">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
