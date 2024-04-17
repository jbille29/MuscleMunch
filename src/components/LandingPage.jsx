// src/components/LandingPage.jsx

import React from 'react';
import './LandingPage.css'; // Importing our CSS for styling
import heroImg from '../assets/6.7.png'
import logo from '../assets/Muscle2.png'
import SignupForm from './SignupForm';

const LandingPage = () => {
  return (
    <div className="landing-container">

      <nav>
        <img className='logo' src={logo} alt="" />
      </nav>

      <section className="hero">
        <div className="hero-text">
          <h1>Boost Your Snacks with Protein</h1>
          <p>Enjoy guilt-free indulgence with our all-natural, high-protein treats. Join our waitlist today for exclusive early access and special offers!</p>
          <SignupForm/>
        </div>
        <div className="hero-image">
          {/* Placeholder for an image. Replace with your actual image path */}
          <img src={heroImg} alt="High-Protein Snack Balls" />
        </div>
      </section>

      {/*<div className="border"></div>*/}
      
      <section className="features">
        <div className="feature">
          <h2>💪 High in Protein, Low in Calories</h2>
          <p>We strive to pack each serving with essential protein while keeping the calorie count low, supporting your health without compromising taste.</p>
        </div>
        <div className="feature">
          <h2>🌿Low Ingredients</h2>
          <p>Focused on simplicity, we select only essential ingredients—no extras, no fillers. Full transparency as we perfect our recipe.</p>
        </div>
        <div className="feature">
          <h2>❤️Vegetarian Friendly</h2>
          <p>Crafted for everyone, our snacks are made using only plant-based ingredients, ensuring they're suitable for vegetarians and anyone looking to enjoy a wholesome treat.</p>
        </div>
      </section>
      
      
    </div>
  );
};

export default LandingPage;
