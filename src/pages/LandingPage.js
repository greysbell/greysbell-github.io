import React, { useState, useEffect } from 'react';
import logo from '../images/logo.png';
import avatar from '../images/avatar.jpeg';
import linkedIn from '../images/linkedIn-logo.png';
import cv from '../assets/Greyston_Bellino_CV.pdf';
import { NavLink } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showAlert, setShowAlert] = useState(true); // Show alert by default on page load

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const closeAlert = () => {
    setShowAlert(false); // Close the alert when button is clicked
  };

  useEffect(() => {
    // Automatically display the alert when the component is first loaded
    setShowAlert(true);
  }, []);

  return (
    <div className="landing-page">
  
      {showAlert && (
        <div className="alert-popup">
          <div className="alert-content">
            <p>For the best experience, please navigate using Google Chrome.</p>
            <button className="close-btn" onClick={closeAlert}>X</button>
          </div>
        </div>
      )}

      <header className="hero-section-nav">
        <nav className="menu">
          <img src={logo} alt="Logo" className="navbar-logo" />
          <ul className="nav-links">
            <li><NavLink to="/landing" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
            <li><NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>Projects</NavLink></li>
            <li><NavLink to="/experience" className={({ isActive }) => isActive ? "active" : ""}>Experience</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink></li>
          </ul>
        </nav>
      </header>

    
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text-container">
            <h2 className="hero glitch layers" data-text="Aim to Inspire."><span>Aim to Inspire.</span></h2>
            <p className="hero-subtext">
              Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning. -Albert Einstein
            </p>
          </div>

          {/* Flip Card */}
          <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <div className="ds-top"></div>
                <div className="avatar-holder">
                  <img src={avatar} alt="Greyston Bellino" />
                </div>
                <div className="name">
                  <a target="_blank" rel="noopener noreferrer">Greyston Bellino</a>
                  <a href="https://www.linkedin.com/in/greyston-bellino-512724162/" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                    <img src={linkedIn} alt="LinkedIn" className="linkedin-logo" />
                  </a>
                </div>
                <div className="button">
                  <a href={cv} download="Greyston_Bellino_CV.pdf" className="btn" onClick={(e) => e.stopPropagation()}>Download CV <i className="fas fa-user-plus"></i></a>
                </div>
                <div className="ds-skill">
                  <h6>Top Skills <i className="fa fa-code" aria-hidden="true"></i></h6>
                  <div className="skill first">
                    <h6><i className="fab fa-first"></i> HTML, CSS, JavaScript</h6>
                    <div className="bar bar-first">
                      <p>100%</p>
                    </div>
                  </div>
                  <div className="skill second">
                    <h6><i className="fab fa-second"></i> Angular, React</h6>
                    <div className="bar bar-second">
                      <p>95%</p>
                    </div>
                  </div>
                  <div className="skill third">
                    <h6><i className="fab fa-third"></i> Python, Java, SQL</h6>
                    <div className="bar bar-third">
                      <p>90%</p>
                    </div>
                  </div>
                </div>
                <p className="learn-more">Click to learn more about me</p>
              </div>

              <div className="flip-card-back">
                <h1>About Me</h1>
                <p>I'm a passionate web developer and data scientist with a strong foundation in <strong>React</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong>. My degree in <strong>Computer Science</strong> from <strong>Toronto Metropolitan University</strong> has exposed me to diverse areas such as <strong>AI</strong>, <strong>Machine Learning</strong>, and <strong>Software Engineering</strong>.</p>
                <p>My experience spans building interactive, responsive web applications and data-driven solutions, optimizing interfaces, and enhancing workflows. I'm skilled with tools like <strong>Azure</strong>, <strong>Figma</strong>, and <strong>Tableau</strong>, and have delivered impactful projects in industries like finance and oil & gas.</p>
                <p>Let's connect and collaborate on innovative tech solutions!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2024 My Portfolio | Designed by Greyston</p>
      </footer>
    </div>
  );
}

export default LandingPage;
