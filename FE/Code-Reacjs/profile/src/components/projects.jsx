import React from 'react';
import project1 from '../assets/react.svg';
import project2 from '../assets/react.svg';
import project3 from '../assets/react.svg';

const Projects = () => {
  const projects = [
    {
      title: 'Website thương mại điện tử',
      description: 'Một trang web thương mại điện tử với đầy đủ chức năng mua sắm, thanh toán.',
      image: project1,
      link: '#'
    },
    {
      title: 'Ứng dụng quản lý công việc',
      description: 'Ứng dụng giúp quản lý công việc hàng ngày với giao diện trực quan.',
      image: project2,
      link: '#'
    },
    {
      title: 'Hệ thống quản lý kho',
      description: 'Phần mềm quản lý kho hàng với các tính năng thống kê, báo cáo.',
      image: project3,
      link: '#'
    }
  ];

  return (
    <section id="projects" className="section">
      <h2>Dự án</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="project-link">Xem chi tiết</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;