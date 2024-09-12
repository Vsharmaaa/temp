import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import FlappyBird from './Ball.js';
import gameImage from './game2.jpeg'; 

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/about" className="nav-link">About Us</Link>
    </nav>
  );
}

function HomePage() {
  return (
    <div className="landing-page">
      <header className="header">
        <h1 className="landing-title">Welcome to GameBox</h1>
        <p className="landing-subtitle">Your destination for fun and excitement!</p>
        <div className="header-image">
          <img src={gameImage} alt="Welcome to GameHub" />
        </div>
      </header>

      <section className="featured-games">
        <h2>Featured Games</h2>
        <div className="games-container">
          <Link to="/flappybird" className="game-box">
            <div className="game-icon">
              <i className="fas fa-gamepad"></i>
            </div>
            <div className="game-thumbnail">
            </div>
            <h2 className="game-title">Ball</h2>
            <p className="game-description">Experience the thrill of bouncing and navigating through challenging levels in this exciting ball game.</p>
          </Link>
        </div>
      </section>

      <section className="newsletter">
        <h2>Stay Updated</h2>
        <p>Subscribe to our newsletter for the latest news and updates.</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </section>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="about-page">
      <header className="header">
        <h1 className="landing-title">About Us</h1>
        <p className="landing-subtitle">Learn more about GameBox and our mission.</p>
      </header>
      <section className="about-content">
        <h2>Our Mission</h2>
        <p>
          At GameBox, our mission is to provide a fun and engaging platform where gamers can discover, play, and enjoy a variety of games. We are dedicated to creating a seamless gaming experience for users of all ages and backgrounds.
        </p>
        <h2>Our Team</h2>
        <p>
          We are a passionate team of game enthusiasts and developers committed to bringing you the best gaming experiences. Our team works tirelessly to curate and develop exciting new games for our users.
        </p>
        <h2>Contact Us</h2>
        <p>
          If you have any questions, feedback, or just want to say hello, feel free to reach out to us at <a href="mailto:contact@gamehub.com">bts630seneca@gmail.com
          </a>.
        </p>
      </section>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/flappybird" element={<FlappyBird />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;


