// home.js
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import './Home.css';
import architecturalDigest from '../Images/image1.avif';
import elleDecor from '../Images/designer.jpg';
import dwell from '../Images/photo-1483478550801-ceba5fe50e8e.avif';
import houseBeautiful from '../Images/photo-1518770660439-4636190af475.avif';
import nyTimes from '../Images/photo-1527689368864-3a821dbccc34.avif';


export default function Home() {
  useEffect(() => {
    // Initialize animations
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate');
      elements.forEach(el => {
        const elementPosition = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementPosition < windowHeight - 100) {
          el.classList.add('animated');
        }
      });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content animate fade-in">
          <h1 className="serif-display">Crafting Timeless Interiors with Purpose</h1>
          <p className="subtitle sans-serif">
            Since 2010, Luxe Interiors has transformed over 300 spaces worldwide, blending
            functionality with extraordinary aesthetics to create environments that inspire.
          </p>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">300+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Industry Awards</div>
            </div>
          </div>
          <div className="hero-buttons">
            <Link to="/portfolio" className="cta-button primary">
              <span>Explore Our Portfolio</span>
            </Link>
            <Link to="/contact" className="cta-button secondary">
              <span>Book a Consultation</span>
            </Link>
          </div>
        </div>
        <div className="hero-image animate slide-up">
          <img
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace"
            alt="Luxury living room design"
            loading="lazy"
          />
          <div className="image-caption sans-serif-small">Manhattan Penthouse, 2023</div>
        </div>
      </section>

      {/* Featured In Section */}
      <section className="featured-in">
        <p className="sans-serif-small">RECOGNIZED BY LEADING PUBLICATIONS</p>
       <div className="logos">
  <img 
    src={architecturalDigest} 
    alt="Architectural Digest" 
    loading="lazy"
    className="publication-logo"
    style={{ width: '160px', height: '100' }}
  />
  <img 
    src={elleDecor} 
    alt="Elle Decor" 
    loading="lazy"
    className="publication-logo"
    style={{ width: '120px', height: 'auto' }}
  />
  <img 
    src={dwell} 
    alt="Dwell" 
    loading="lazy"
    className="publication-logo"
    style={{ width: '100px', height: 'auto' }}
  />
  <img 
    src={houseBeautiful} 
    alt="House Beautiful" 
    loading="lazy"
    className="publication-logo"
    style={{ width: '180px', height: 'auto' }}
  />
  <img 
    src={nyTimes} 
    alt="New York Times" 
    loading="lazy"
    className="publication-logo"
    style={{ width: '140px', height: 'auto' }}
  />
</div>
      </section>

      {/* Signature Projects Section */}
      <section className="projects-section">
        <div className="section-header">
          <h2 className="serif-heading">Our Signature Projects</h2>
          <p className="sans-serif">Spaces that define our design philosophy</p>
        </div>
        <div className="projects-grid">
          <div className="project-card animate fade-in">
            <div className="project-image">
              <img src="https://images.unsplash.com/photo-1600121848594-d8644e57abab" alt="Modern penthouse" loading="lazy" />
            </div>
            <div className="project-info">
              <h3 className="serif-subheading">The Hudson Residence</h3>
              <div className="project-meta sans-serif-small">
                <span>New York, NY</span>
                <span>•</span>
                <span>3,200 sq ft</span>
                <span>•</span>
                <span>Residential</span>
              </div>
              <p className="sans-serif">A complete transformation of a Tribeca loft with custom millwork and curated art collection integration.</p>
            </div>
          </div>
          <div className="project-card animate fade-in">
            <div className="project-image">
              <img src="https://images.unsplash.com/photo-1493809842364-78817add7ffb" alt="Contemporary office" loading="lazy" />
            </div>
            <div className="project-info">
              <h3 className="serif-subheading">Venture Capital Headquarters</h3>
              <div className="project-meta sans-serif-small">
                <span>San Francisco, CA</span>
                <span>•</span>
                <span>12,000 sq ft</span>
                <span>•</span>
                <span>Commercial</span>
              </div>
              <p className="sans-serif">Biophilic design elements combined with cutting-edge technology for a forward-thinking workspace.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-image animate slide-up">
          <div className="image-overlay"></div>
          <img
            src="https://images.unsplash.com/photo-1617806118233-18e1de247200"
            alt="Our design team at work"
            loading="lazy"
          />
          <div className="experience-badge">
            <div className="years">15</div>
            <div className="label">Years of Excellence</div>
          </div>
        </div>
        <div className="about-content animate fade-in">
          <h2 className="serif-heading">Design Philosophy</h2>
          <p className="sans-serif">
            We believe interiors should tell your story while standing the test of time. Our approach combines:
          </p>
          <ul className="design-principles sans-serif">
            <li>
              <span className="principle-title">Contextual Design</span>
              <span className="principle-desc">Architecture that responds to its environment and cultural context</span>
            </li>
            <li>
              <span className="principle-title">Material Honesty</span>
              <span className="principle-desc">Natural materials celebrated in their authentic form</span>
            </li>
            <li>
              <span className="principle-title">Sensory Experience</span>
              <span className="principle-desc">Spaces designed for all senses - sight, sound, touch</span>
            </li>
          </ul>
          <div className="signature">
            <img src="/signature.png" alt="Founder Signature" loading="lazy" />
            <div className="signature-info sans-serif-small">
              <div>Sarah Williamson</div>
              <div>Founder & Principal Designer</div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="section-header animate fade-in">
          <h2 className="serif-heading">Our Design Process</h2>
          <p className="sans-serif">A collaborative journey to exceptional spaces</p>
        </div>
        <div className="process-steps">
          <div className="process-step animate slide-up">
            <div className="step-number">01</div>
            <h3 className="serif-subheading">Discovery</h3>
            <p className="sans-serif">Deep dive into your lifestyle, needs, and aspirations through detailed consultations.</p>
          </div>
          <div className="process-step animate slide-up">
            <div className="step-number">02</div>
            <h3 className="serif-subheading">Concept Development</h3>
            <p className="sans-serif">Creation of mood boards, material palettes, and preliminary space planning.</p>
          </div>
          <div className="process-step animate slide-up">
            <div className="step-number">03</div>
            <h3 className="serif-subheading">Design Refinement</h3>
            <p className="sans-serif">Detailed drawings, 3D visualizations, and specification of all design elements.</p>
          </div>
          <div className="process-step animate slide-up">
            <div className="step-number">04</div>
            <h3 className="serif-subheading">Execution</h3>
            <p className="sans-serif">Project management from procurement through final installation.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="section-header animate fade-in">
          <h2 className="serif-heading">Client Experiences</h2>
          <p className="sans-serif">The stories behind our collaborations</p>
        </div>
        <div className="testimonials-grid">
          <div className="testimonial-card animate slide-up">
            <div className="testimonial-content serif-italic">
              "Working with Luxe Interiors was transformative. They took our vague ideas and created a home that perfectly captures who we are while introducing us to design possibilities we never imagined."
            </div>
            <div className="client-info">
              <div className="client-image">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Client" loading="lazy" />
              </div>
              <div className="client-details sans-serif-small">
                <div className="client-name">The Rodriguez Family</div>
                <div className="project-type">Upper East Side Residence</div>
              </div>
            </div>
          </div>
          <div className="testimonial-card animate slide-up">
            <div className="testimonial-content serif-italic">
              "The new office has become our best recruitment tool. Candidates walk in and immediately want to work here. The design perfectly balances professionalism with creative energy."
            </div>
            <div className="client-info">
              <div className="client-image">
                <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Client" loading="lazy" />
              </div>
              <div className="client-details sans-serif-small">
                <div className="client-name">Sarah Chen</div>
                <div className="project-type">Innovatech Office Design</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content animate fade-in">
          <h2 className="serif-display">Ready to Begin Your Design Journey?</h2>
          <p className="sans-serif">
            Schedule a complimentary 30-minute consultation with our design team. Let's discuss your vision and how we can bring it to life.
          </p>
          <div className="cta-actions">
            <Link to="/contact" className="cta-button primary large">
              <span>Get Started</span>
            </Link>
            <div className="cta-contact sans-serif-small">
              <div>Or call us directly</div>
              <div className="phone-number">8010825179</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
