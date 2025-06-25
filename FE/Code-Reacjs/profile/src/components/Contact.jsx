import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý gửi form ở đây
    console.log(formData);
    alert('Cảm ơn bạn đã liên hệ! Tôi sẽ phản hồi sớm nhất có thể.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section">
      <h2>Liên hệ</h2>
      <div className="contact-container">
        <div className="contact-info">
          <p><i className="fas fa-envelope"></i> email@example.com</p>
          <p><i className="fas fa-phone"></i> +84 123 456 789</p>
          <p><i className="fas fa-map-marker-alt"></i> Hà Nội, Việt Nam</p>
        </div>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Tên của bạn"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Nội dung"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">Gửi tin nhắn</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;