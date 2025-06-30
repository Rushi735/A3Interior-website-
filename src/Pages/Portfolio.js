// portfolio.js
import React from 'react';
import { FaSearchPlus, FaHome, FaBuilding, FaMapMarkerAlt, FaExpand } from 'react-icons/fa';
import { FiHeart, FiMessageSquare  } from 'react-icons/fi';
import './Portfolio.css';
import { useState } from 'react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Urban Apartment Transformation',
      category: 'residential',
      image: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a',
      description: 'Complete redesign of a downtown apartment with custom millwork and space-saving solutions',
      location: 'New York, NY',
      size: '1,200 sq ft',
      year: '2023',
      likes: 142,
      comments: 28
    },
    {
      id: 2,
      title: 'Coastal Luxury Villa',
      category: 'residential',
      image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115',
      description: 'Oceanfront property featuring organic materials and seamless indoor-outdoor living',
      location: 'Malibu, CA',
      size: '4,500 sq ft',
      year: '2022',
      likes: 256,
      comments: 42
    },
    {
      id: 3,
      title: 'Innovative Corporate Headquarters',
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2',
      description: 'Tech company office with collaborative workspaces and biophilic design elements',
      location: 'San Francisco, CA',
      size: '15,000 sq ft',
      year: '2023',
      likes: 189,
      comments: 31
    },
    {
      id: 4,
      title: 'Boutique Hotel Lobby & Suites',
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
      description: 'Luxury hotel featuring custom furnishings and artisanal craftsmanship',
      location: 'Miami, FL',
      size: '22,000 sq ft',
      year: '2021',
      likes: 324,
      comments: 56
    },
    {
      id: 5,
      title: 'Minimalist Tribeca Loft',
      category: 'residential',
      image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab',
      description: 'Clean-lined living space with gallery-like art display areas',
      location: 'New York, NY',
      size: '2,800 sq ft',
      year: '2022',
      likes: 278,
      comments: 39
    },
    {
      id: 6,
      title: 'Tech Startup Collaborative Space',
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36',
      description: 'Innovative workspace designed to foster creativity and productivity',
      location: 'Austin, TX',
      size: '8,500 sq ft',
      year: '2023',
      likes: 201,
      comments: 27
    }
  ];

  const instagramPosts = [
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace',
      caption: 'Behind the scenes of our latest project #interiordesign'
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200',
      caption: 'Material selection for a client meeting #designprocess'
    },
    {
      id: 9,
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6',
      caption: 'Custom furniture piece we designed #madebyhand'
    }
  ];

  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="portfolio-page">
      {/* Hero Section */}
      <section className="portfolio-hero">
        <div className="hero-overlay">
          <h1 className="serif-display">Our Design Portfolio</h1>
          <p className="sans-serif">A curated collection of spaces we've transformed with thoughtful design</p>
        </div>
      </section>

      {/* Portfolio Intro */}
      <section className="portfolio-intro">
        <div className="intro-content">
          <h2 className="serif-heading">Crafting Spaces with Intention</h2>
          <p className="sans-serif">
            Each project in our portfolio represents a unique collaboration with our clients. 
            We approach every space with fresh eyes, creating environments that are both 
            beautiful and deeply functional.
          </p>
          <div className="portfolio-stats">
            <div className="stat-item">
              <div className="stat-number">300+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15</div>
              <div className="stat-label">Design Awards</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">12</div>
              <div className="stat-label">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Controls */}
      <section className="portfolio-controls-section">
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
      </section>

      {/* Projects Grid */}
      <section className="portfolio-grid-section">
        <div className="portfolio-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="portfolio-card" onClick={() => setSelectedProject(project)}>
              <div className="card-image">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="image-overlay">
                  <FaSearchPlus className="zoom-icon" />
                  <div className="project-meta">
                    <span><FaMapMarkerAlt /> {project.location}</span>
                    <span>{project.size}</span>
                    <span>{project.year}</span>
                  </div>
                </div>
              </div>
              <div className="card-content">
                <h3 className="serif-subheading">{project.title}</h3>
                <p className="sans-serif">{project.description}</p>
                <div className="card-footer">
                  <span className={`category-badge ${project.category}`}>
                    {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                  </span>
                  <div className="social-stats">
                    <span><FiHeart /> {project.likes}</span>
                    <span><FiMessageSquare /> {project.comments}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Instagram Section */}
      <section className="instagram-section">
        <div className="section-header">
          <h2 className="serif-heading">Behind the Scenes</h2>
          <p className="sans-serif">Follow our design process on <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></p>
        </div>
        <div className="instagram-grid">
          {instagramPosts.map((post) => (
            <div key={post.id} className="instagram-post">
              <div className="post-image">
                <img src={post.image} alt={post.caption} loading="lazy" />
                <div className="post-overlay">
                  <div className="post-actions">
                    <span><FiHeart /> Like</span>
                    <span><FiMessageSquare /> Comment</span>
                  </div>
                </div>
              </div>
              <div className="post-caption sans-serif-small">{post.caption}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="portfolio-cta">
        <div className="cta-content">
          <h2 className="serif-display">Ready to Begin Your Project?</h2>
          <p className="sans-serif">
            Our design process starts with understanding your vision. Let's create something exceptional together.
          </p>
          <button className="cta-button primary">
            <span>Schedule a Consultation</span>
          </button>
          <div className="cta-contact sans-serif-small">
            <div>Or contact us directly</div>
            <div className="phone-number">+1 (555) 123-4567</div>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="project-modal">
          <div className="modal-content">
            <button className="close-modal" onClick={() => setSelectedProject(null)}>×</button>
            <div className="modal-image">
              <img src={selectedProject.image} alt={selectedProject.title} />
            </div>
            <div className="modal-details">
              <h3 className="serif-heading">{selectedProject.title}</h3>
              <div className="project-meta sans-serif-small">
                <span><FaMapMarkerAlt /> {selectedProject.location}</span>
                <span>{selectedProject.size}</span>
                <span>{selectedProject.year}</span>
              </div>
              <p className="sans-serif">{selectedProject.description}</p>
              <div className="modal-gallery">
                <div className="gallery-item">
                  <img src={selectedProject.image} alt={selectedProject.title} />
                  <button className="expand-button"><FaExpand /></button>
                </div>
                {/* Additional gallery items would go here */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;