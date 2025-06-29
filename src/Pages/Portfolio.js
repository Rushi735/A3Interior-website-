import React from 'react';
import { FaSearchPlus, FaHome, FaBuilding } from 'react-icons/fa';
import './Portfolio.css';
import { useState } from 'react';
const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Urban Apartment',
      category: 'residential',
      image: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      description: 'Modern design with smart space utilization'
    },
    {
      id: 2,
      title: 'Luxury Villa',
      category: 'residential',
      image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      description: 'Elegant contemporary living spaces'
    },
    {
      id: 3,
      title: 'Corporate Office',
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
      description: 'Productive workspace with modern aesthetics'
    },
    {
      id: 4,
      title: 'Boutique Hotel',
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      description: 'Luxurious guest experience design'
    },
    {
      id: 5,
      title: 'Minimalist Loft',
      category: 'residential',
      image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      description: 'Clean lines and functional elegance'
    },
    {
      id: 6,
      title: 'Tech Startup Office',
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      description: 'Innovative collaborative workspace'
    }
  ];

  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="portfolio-page">
      {/* Hero Section */}
      <div className="portfolio-hero">
        <div className="hero-overlay">
          <h1>Our Design Portfolio</h1>
          <p>Explore our curated collection of exceptional interior designs</p>
        </div>
      </div>

      {/* Filter Controls */}
      <div className="portfolio-controls">
        <button 
          onClick={() => setFilter('all')}
          className={filter === 'all' ? 'active' : ''}
        >
          All Projects
        </button>
        <button 
          onClick={() => setFilter('residential')}
          className={filter === 'residential' ? 'active' : ''}
        >
          <FaHome /> Residential
        </button>
        <button 
          onClick={() => setFilter('commercial')}
          className={filter === 'commercial' ? 'active' : ''}
        >
          <FaBuilding /> Commercial
        </button>
      </div>

      {/* Projects Grid */}
      <div className="portfolio-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="portfolio-card">
            <div className="card-image">
              <img src={project.image} alt={project.title} />
              <div className="image-overlay">
                <FaSearchPlus className="zoom-icon" />
              </div>
            </div>
            <div className="card-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span className={`category-badge ${project.category}`}>
                {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="portfolio-cta">
        <h2>Ready to Create Your Dream Space?</h2>
        <p>Let's discuss your vision and bring it to life</p>
        <button className="cta-button">Schedule Consultation</button>
      </div>
    </div>
  );
};

export default Portfolio;