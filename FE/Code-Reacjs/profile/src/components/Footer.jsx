import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Nguyễn Văn A. All rights reserved.</p>
      <div className="footer-links">
        <a href="#about">Giới thiệu</a>
        <a href="#skills">Kỹ năng</a>
        <a href="#projects">Dự án</a>
        <a href="#contact">Liên hệ</a>
      </div>
    </footer>
  );
};

export default Footer;