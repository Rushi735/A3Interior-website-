import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import './Home.css';

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
          <h1>Transform Your Space With Timeless Design</h1>
          <p className="subtitle">
            Luxe Interiors creates bespoke residential and commercial spaces that blend 
            functionality with extraordinary aesthetics. Serving clients since 2010.
          </p>
          <div className="hero-buttons">
            <Link to="/portfolio" className="cta-button primary">
              View Our Work
            </Link>
            <Link to="/contact" className="cta-button secondary">
              Free Consultation
            </Link>
          </div>
        </div>
        <div className="hero-image animate slide-up">
          <img 
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace" 
            alt="Luxury living room design" 
          />
        </div>
      </section>

      {/* Featured In Section */}
      <section className="featured-in">
        <p>Featured in:</p>
        <div className="logos">
          <img src="/logos/archdigest.png" alt="Architectural Digest" />
          <img src="/logos/elle-decor.png" alt="Elle Decor" />
          <img src="/logos/dwell.png" alt="Dwell" />
          <img src="/logos/house-beautiful.png" alt="House Beautiful" />
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-image animate slide-up">
          <img 
            src="https://images.unsplash.com/photo-1617806118233-18e1de247200" 
            alt="Our design team at work" 
          />
        </div>
        <div className="about-content animate fade-in">
          <h2>Our Design Philosophy</h2>
          <p>
            At Luxe Interiors, we believe that exceptional spaces tell stories. Our approach combines:
          </p>
          <ul className="design-principles">
            <li>
              <strong>Holistic Vision</strong> - We consider architecture, lighting, and furnishings as interconnected elements
            </li>
            <li>
              <strong>Client-Centric Process</strong> - Your lifestyle and preferences guide every decision
            </li>
            <li>
              <strong>Sustainable Luxury</strong> - We source eco-friendly materials without compromising on quality
            </li>
          </ul>
          <Link to="/about" className="learn-more">
            Learn more about our approach →
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="section-header animate fade-in">
          <h2>Our Comprehensive Services</h2>
          <p>From concept to completion, we handle every detail</p>
        </div>
        <div className="services-grid">
          <div className="service-card animate slide-up">
            <div className="service-icon">🛋️</div>
            <h3>Residential Design</h3>
            <p>
              Complete home transformations including living spaces, kitchens, 
              bedrooms, and custom home offices. We specialize in creating 
              functional yet beautiful living environments.
            </p>
            <Link to="/services/residential" className="service-link">
              View residential projects →
            </Link>
          </div>
          <div className="service-card animate slide-up">
            <div className="service-icon">🏢</div>
            <h3>Commercial Spaces</h3>
            <p>
              Office designs that boost productivity and reflect your brand identity. 
              We create welcoming lobbies, collaborative workspaces, and executive 
              suites that impress clients and employees alike.
            </p>
            <Link to="/services/commercial" className="service-link">
              View commercial projects →
            </Link>
          </div>
          <div className="service-card animate slide-up">
            <div className="service-icon">🏨</div>
            <h3>Hospitality Design</h3>
            <p>
              Hotel, restaurant, and retail spaces designed to enhance guest 
              experiences. Our hospitality designs balance aesthetic appeal with 
              operational efficiency.
            </p>
            <Link to="/services/hospitality" className="service-link">
              View hospitality projects →
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="portfolio-section">
        <div className="section-header animate fade-in">
          <h2>Recent Projects</h2>
          <p>Explore our latest design transformations</p>
        </div>
        <div className="portfolio-grid">
          <div className="portfolio-item animate fade-in">
            <img 
              src="https://images.unsplash.com/photo-1600121848594-d8644e57abab" 
              alt="Modern penthouse design" 
            />
            <div className="portfolio-overlay">
              <h3>Urban Skyline Penthouse</h3>
              <p>New York, NY</p>
              <Link to="/portfolio/urban-penthouse" className="view-project">
                View Project
              </Link>
            </div>
          </div>
          <div className="portfolio-item animate fade-in">
            <img 
              src="https://images.unsplash.com/photo-1493809842364-78817add7ffb" 
              alt="Contemporary office design" 
            />
            <div className="portfolio-overlay">
              <h3>Tech Startup Headquarters</h3>
              <p>San Francisco, CA</p>
              <Link to="/portfolio/tech-hq" className="view-project">
                View Project
              </Link>
            </div>
          </div>
          <div className="portfolio-item animate fade-in">
            <img 
              src="https://images.unsplash.com/photo-1565538810643-b5bdb714032a" 
              alt="Luxury hotel lobby" 
            />
            <div className="portfolio-overlay">
              <h3>Coastal Resort Lobby</h3>
              <p>Miami, FL</p>
              <Link to="/portfolio/coastal-resort" className="view-project">
                View Project
              </Link>
            </div>
          </div>
        </div>
        <div className="view-all animate fade-in">
          <Link to="/portfolio" className="cta-button">
            View Full Portfolio
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="section-header animate fade-in">
          <h2>Client Testimonials</h2>
          <p>Hear what our clients say about working with us</p>
        </div>
        <div className="testimonials-grid">
          <div className="testimonial-card animate slide-up">
            <div className="testimonial-content">
              "Luxe Interiors completely transformed our Manhattan apartment. 
              They listened to our needs and delivered beyond our expectations. 
              The space is both beautiful and incredibly functional for our family."
            </div>
            <div className="client-info">
              <div className="client-name">The Rodriguez Family</div>
              <div className="project-type">Upper East Side Residence</div>
            </div>
          </div>
          <div className="testimonial-card animate slide-up">
            <div className="testimonial-content">
              "Our new office design has received countless compliments. The team 
              understood our brand perfectly and created a space that inspires 
              creativity while improving workflow efficiency."
            </div>
            <div className="client-info">
              <div className="client-name">Sarah Chen, CEO</div>
              <div className="project-type">Innovatech Office Design</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content animate fade-in">
          <h2>Ready to Transform Your Space?</h2>
          <p>
            Schedule a complimentary consultation with our design team. Let's discuss 
            your vision and how we can bring it to life.
          </p>
          <Link to="/contact" className="cta-button primary large">
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}