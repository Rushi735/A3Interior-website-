import React from 'react';
import { Helmet } from 'react-helmet';
import TeamMember from '../Components/TeamMember';
import '../Pages/About.css';

// Local image imports (you should download these images and add them to your project)
import studioImg from '../Images/studio.jpg';
import founderImg from '../Images/founder.jpg';
import designerImg from '../Images/designer.jpg';
import projectImg from '../Images/project.jpg';
import ctaBgImg from '../Images/cta-bg.jpg';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About | Signature Interiors</title>
        <meta name="description" content="Discover the philosophy and team behind our award-winning interior design studio." />
        <meta property="og:image" content={studioImg} />
      </Helmet>

      {/* Hero Section with Parallax Effect */}
      <div className="about-hero" style={{backgroundImage: `url(${studioImg})`}}>
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Design With Intention</h1>
            <p className="hero-subtitle">Crafting spaces that reflect your essence</p>
            <div className="scroll-indicator">
              <span></span>
            </div>
          </div>
        </div>
      </div>

      {/* Rest of your component remains the same, just replace image references */}
      {/* Main Content */}
      <div className="about-container">
        {/* Philosophy Section */}
        <section className="philosophy-section">
          <div className="section-header">
            <h2>Our Philosophy</h2>
            <div className="divider gold-divider"></div>
            <p className="section-subtitle">Where vision meets craftsmanship</p>
          </div>
          
          <div className="philosophy-content">
            <div className="philosophy-text">
              <p className="lead-text">
                At Signature Interiors, we believe exceptional design is born from the perfect balance 
                of aesthetics and functionality. Each space we create tells a unique story while 
                serving its purpose flawlessly.
              </p>
              <div className="philosophy-points">
                <div className="point">
                  <h3>01. Intentional Design</h3>
                  <p>Every element serves a purpose, creating harmony between form and function.</p>
                </div>
                <div className="point">
                  <h3>02. Timeless Aesthetics</h3>
                  <p>We create spaces that feel relevant today and remain beautiful for years to come.</p>
                </div>
                <div className="point">
                  <h3>03. Collaborative Process</h3>
                  <p>Your vision is our blueprint—we listen, interpret, and elevate your ideas.</p>
                </div>
              </div>
            </div>
            <div className="philosophy-image">
              <img src={projectImg} alt="Signature Interiors project" loading="lazy" />
              <div className="image-overlay"></div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="timeline-section">
          <div className="section-header">
            <h2>Our Journey</h2>
            <div className="divider gold-divider"></div>
            <p className="section-subtitle">Milestones in design excellence</p>
          </div>
          
          <div className="timeline">
            <div className="timeline-line"></div>
            
            <div className="timeline-item left">
              <div className="timeline-content">
                <h3>2010</h3>
                <p>Founded in New York with a vision to redefine interior spaces</p>
              </div>
              <div className="timeline-dot"></div>
            </div>
            
            <div className="timeline-item right">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2014</h3>
                <p>First international project in Dubai, marking our global expansion</p>
              </div>
            </div>
            
            <div className="timeline-item left">
              <div className="timeline-content">
                <h3>2018</h3>
                <p>Named "Top Residential Designer" by Design Elite Magazine</p>
              </div>
              <div className="timeline-dot"></div>
            </div>
            
            <div className="timeline-item right">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>2023</h3>
                <p>Expanded to three continents with projects in 12 countries</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section">
          <div className="section-header">
            <h2>Meet The Visionaries</h2>
            <div className="divider gold-divider"></div>
            <p className="section-subtitle">The creative minds behind our success</p>
          </div>
          
          <div className="team-grid">
            <TeamMember 
              img={founderImg}
              name="Alexandra Chen"
              role="Founder & Creative Director"
              bio="Parsons School of Design graduate with 15+ years transforming spaces into timeless experiences. Alexandra's visionary approach blends classical training with contemporary sensibilities."
              social={[
                {name: 'instagram', url: '#'},
                {name: 'linkedin', url: '#'}
              ]}
            />
            <TeamMember 
              img={designerImg}
              name="James Rodriguez"
              role="Lead Designer"
              bio="Specializes in blending contemporary minimalism with organic textures. James brings a unique perspective shaped by his architectural background and global travels."
              social={[
                {name: 'instagram', url: '#'},
                {name: 'pinterest', url: '#'}
              ]}
            />
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section">
          <div className="stats-container">
            <div className="stat-item">
              <h3>200+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-item">
              <h3>15</h3>
              <p>Countries Served</p>
            </div>
            <div className="stat-item">
              <h3>28</h3>
              <p>Awards Won</p>
            </div>
            <div className="stat-item">
              <h3>100%</h3>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="about-cta" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${ctaBgImg})`}}>
          <div className="cta-content">
            <h2>Ready to Begin Your Design Journey?</h2>
            <p>Let's collaborate to create a space that truly reflects you</p>
            <div className="cta-buttons">
              <button className="cta-button primary">Schedule Consultation</button>
              <button className="cta-button secondary">View Our Portfolio</button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;