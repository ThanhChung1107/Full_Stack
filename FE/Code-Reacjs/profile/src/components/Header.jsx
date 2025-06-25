import React from 'react';
import profileImage from '../assets/react.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <img src={profileImage} alt="Profile" className="profile-img" />
        <h1>Nguyễn Văn A</h1>
        <p>Lập trình viên Full-stack</p>
        <div className="social-links">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;