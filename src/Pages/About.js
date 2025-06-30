// About.js
import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import './About.css';

// Using placeholder images that will work without actual files
const teamMembers = [
  {
    id: 1,
    name: "Sarah Williamson",
    role: "Founder & Creative Director",
    bio: "With 15+ years in luxury interior design, Sarah brings an unparalleled eye for detail.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Lead Architect",
    bio: "Specializing in spatial harmony, Michael transforms structures into breathtaking designs.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
  }
];

const TeamCard = ({ name, role, bio, image }) => (
  <div className="team-card">
    <img src={image} alt={name} loading="lazy" />
    <div className="team-info">
      <h3>{name}</h3>
      <p className="role">{role}</p>
      <p className="bio">{bio}</p>
    </div>
  </div>
);

const About = () => {
  return (
    <>
      <Helmet>
        <title>About | Luxe Interiors</title>
        <meta name="description" content="Discover our design philosophy and meet our team" />
      </Helmet>

      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Crafting Timeless Spaces
          </motion.h1>
          <p>Where design meets intentional living</p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="philosophy-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Design Ethos</h2>
            <div className="divider"></div>
          </div>

          <div className="philosophy-grid">
            <div className="philosophy-text">
              <p className="lead-text">
                At Luxe Interiors, we believe exceptional spaces tell stories through thoughtful design.
              </p>
              
              <div className="philosophy-points">
                {[
                  { num: "01", title: "Contextual Design", desc: "Architecture that responds to its environment" },
                  { num: "02", title: "Material Honesty", desc: "Natural materials in their authentic form" },
                  { num: "03", title: "Sensory Experience", desc: "Spaces designed for all senses" }
                ].map((point, index) => (
                  <motion.div 
                    key={index}
                    className="point-card"
                    whileHover={{ y: -5 }}
                  >
                    <span className="point-number">{point.num}</span>
                    <h3>{point.title}</h3>
                    <p>{point.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="philosophy-image">
              <img 
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                alt="Design philosophy" 
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Journey</h2>
            <div className="divider"></div>
          </div>

          <div className="timeline">
            {[
              { year: "2010", title: "Founded in New York", desc: "Established our first studio in SoHo" },
              { year: "2015", title: "International Expansion", desc: "First overseas project in London" },
              { year: "2020", title: "Sustainability Initiative", desc: "Launched eco-conscious design program" },
              { year: "2023", title: "Global Recognition", desc: "Named top firm by Architectural Digest" }
            ].map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <h2>Meet The Team</h2>
            <div className="divider"></div>
            <p className="section-subtitle">The creative minds behind our success</p>
          </div>

          <div className="team-grid">
            {teamMembers.map(member => (
              <TeamCard 
                key={member.id}
                name={member.name}
                role={member.role}
                bio={member.bio}
                image={member.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {[
              { value: "250+", label: "Projects Completed" },
              { value: "18", label: "Countries Served" },
              { value: "32", label: "Awards Won" },
              { value: "100%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <div key={index} className="stat-item">
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Begin Your Design Journey?</h2>
            <p>Let's collaborate to create a space that truly reflects you</p>
            <div className="cta-buttons">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Schedule Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                View Portfolio
              </motion.button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;