import React from 'react';
import './Home.sass';

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="overlay" />
      <div className="home-content">
        <h1>Timothy Chukwu</h1>
        <p className="typing-animation">Cybersecurity Enthusiast | Penetration Tester | Digital Forensics | SOC Analyst</p>
        <button className="home-button">Get in Touch</button>
      </div>
    </section>
  );
};

export default Home;