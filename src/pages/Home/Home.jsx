import React from 'react';
import Navbar from '../../components/navbar/navbar';
import './Home.css';

// Import images
import parisImg from './Images/paris.jpg';
import tokyoImg from './Images/tokyo.jpg';
import newyorkImg from './Images/newyork.jpg';
import romeImg from './Images/rome.jpg';

const ExploreEase = () => {
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Add search functionality here
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    // Add contact form submission logic here
  };

  return (
    <div className="explore-ease-container">
      <Navbar />

      
      

      {/* Search Results Section */}
      <section id="searchResults" className="search-results">
        <h2>Explore Top Destinations</h2>
        <div className="destination-cards">
          {/* Paris */}
          <div className="destination-card">
            <a href="/paris.html">
              <img src={parisImg} alt="Paris" className="destination-img" />
            </a>
            <div className="destination-content">
              <h3>Paris, France</h3>
              <div className="category">
                <h4>🏰 Famous Places</h4>
                <p>Eiffel Tower, Louvre Museum, Notre-Dame Cathedral</p>
              </div>
              <div className="category">
                <h4>🍴 Must-Try Food</h4>
                <p>Croissants, Coq au Vin, Macarons</p>
              </div>
              <div className="category">
                <h4>🏨 Nearby Hotels</h4>
                <p>Hôtel Ritz Paris, Le Bristol, Hôtel Plaza Athénée</p>
              </div>
            </div>
          </div>

          {/* Tokyo */}
          <div className="destination-card">
            <a href="/tokyo.html">
              <img src={tokyoImg} alt="Tokyo" className="destination-img" />
            </a>
            <div className="destination-content">
              <h3>Tokyo, Japan</h3>
              <div className="category">
                <h4>🏯 Famous Places</h4>
                <p>Shibuya Crossing, Sensō-ji Temple, Tokyo Skytree</p>
              </div>
              <div className="category">
                <h4>🍣 Must-Try Food</h4>
                <p>Sushi, Ramen, Tempura</p>
              </div>
              <div className="category">
                <h4>🏨 Nearby Hotels</h4>
                <p>Park Hotel Tokyo, The Ritz-Carlton, Hotel Okura</p>
              </div>
            </div>
          </div>

          {/* New York */}
          <div className="destination-card">
            <a href="/newyork.html">
              <img src={newyorkImg} alt="New York" className="destination-img" />
            </a>
            <div className="destination-content">
              <h3>New York, USA</h3>
              <div className="category">
                <h4>🗽 Famous Places</h4>
                <p>Statue of Liberty, Central Park, Times Square</p>
              </div>
              <div className="category">
                <h4>🍕 Must-Try Food</h4>
                <p>New York Pizza, Bagels, Cheesecake</p>
              </div>
              <div className="category">
                <h4>🏨 Nearby Hotels</h4>
                <p>The Plaza Hotel, The St. Regis, Four Seasons</p>
              </div>
            </div>
          </div>

          {/* Rome */}
          <div className="destination-card">
            <a href="/rome.html">
              <img src={romeImg} alt="Rome" className="destination-img" />
            </a>
            <div className="destination-content">
              <h3>Rome, Italy</h3>
              <div className="category">
                <h4>🏛️ Famous Places</h4>
                <p>Colosseum, Vatican City, Trevi Fountain</p>
              </div>
              <div className="category">
                <h4>🍝 Must-Try Food</h4>
                <p>Carbonara, Gelato, Supplì</p>
              </div>
              <div className="category">
                <h4>🏨 Nearby Hotels</h4>
                <p>Hotel Eden, Palazzo Manfredi, The St. Regis Rome</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
        <div className='backdrop'>
            <section id="home" className="hero">
                <div className="hero-content">

                <h1>Explore the World with Ease</h1>
                <p>Your perfect travel companion for unforgettable adventures.</p>
                <form id="searchForm" onSubmit={handleSearchSubmit}>
                    <input type="text" id="destination" placeholder="Enter your destination" required />
                    <button type="submit" className="btn">Search</button>
                </form>
                </div>
            </section>
        </div>
        
      

      {/* Features Section */}
      <section id="features" className="features">
        <h2>Our Features</h2>
        <div className="feature-cards">
          <div className="card">
            <div className="icon">🗺️</div>
            <h3>Personalized Itinerary</h3>
            <p>Get tailored travel plans based on your preferences and interests.</p>
          </div>
          <div className="card">
            <div className="icon">⏰</div>
            <h3>Real-Time Availability</h3>
            <p>Check real-time updates for flights, hotels, and attractions.</p>
          </div>
          <div className="card">
            <div className="icon">🤝</div>
            <h3>Local Experiences</h3>
            <p>Discover unique local tours and connect with local guides.</p>
          </div>
          <div className="card">
            <div className="icon">💰</div>
            <h3>Price Comparison</h3>
            <p>Compare prices and find the best deals for your trip.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About ExploreEase</h2>
        <p>
          ExploreEase is an innovative travel platform designed to simplify trip planning while 
          promoting eco-friendly and sustainable tourism. Our mission is to provide personalized, 
          real-time, and cost-effective travel solutions that enhance your journey and support local communities.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <form onSubmit={handleContactSubmit}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit" className="btn">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2024 ExploreEase. All rights reserved.</p>
        <div className="social-links">
          <a href="#">FB</a>
          <a href="#">TW</a>
          <a href="#">IG</a>
        </div>
      </footer>
    </div>
  );
};

export default ExploreEase;