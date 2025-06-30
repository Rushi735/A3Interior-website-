import React from 'react';
import { FaPalette, FaHome, FaBuilding,  FaHandshake } from 'react-icons/fa';
import { GiMaterialsScience } from 'react-icons/gi';
import { MdColorLens, MdOutlineDesignServices } from 'react-icons/md';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Residential Design',
      icon: <FaHome className="service-icon" />,
      image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      description: 'Transform your living spaces into personalized sanctuaries that reflect your style and enhance your daily life.',
      features: [
        'Custom space planning',
        'Material & finish selection',
        'Furniture design & procurement',
        'Lighting design',
        'Color consultation'
      ]
    },
    {
      id: 2,
      title: 'Commercial Design',
      icon: <FaBuilding className="service-icon" />,
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
      description: 'Create inspiring work environments that boost productivity, reflect your brand, and impress clients.',
      features: [
        'Office space planning',
        'Brand integration',
        'Wayfinding systems',
        'Acoustic solutions',
        'Sustainable design'
      ]
    },
    {
      id: 3,
      title: 'Hospitality Design',
      icon: <FaPalette className="service-icon" />,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      description: 'Design memorable guest experiences that elevate your hospitality business and create lasting impressions.',
      features: [
        'Lobby & reception design',
        'Guest room planning',
        'Restaurant & bar concepts',
        'Lighting ambiance',
        'FF&E specification'
      ]
    }
  ];

  const processSteps = [
    {
      id: 1,
      title: 'Discovery',
      icon: <FaHandshake className="process-icon" />,
      description: 'We listen to your needs, preferences, and vision for the space.'
    },
    {
      id: 2,
      title: 'Concept Development',
      icon: <MdOutlineDesignServices className="process-icon" />,
      description: 'Our team creates initial design concepts tailored to your requirements.'
    },
    {
      id: 3,
      title: 'Design Refinement',
      icon: <MdColorLens className="process-icon" />,
      description: 'We refine the design based on your feedback and selections.'
    },
    {
      id: 4,
      title: 'Implementation',
      icon: <GiMaterialsScience className="process-icon" />,
      description: 'We oversee the execution to ensure flawless realization of the design.'
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <div className="services-hero">
        <div className="hero-overlay">
          <h1>Our Design Services</h1>
          <p>Where creativity meets functionality to transform your spaces</p>
        </div>
      </div>

      {/* Services Section */}
      <div className="services-section">
        <div className="section-header">
          <h2 className="section-title">What We Offer</h2>
          <p className="section-subtitle">Tailored design solutions that bring your vision to life</p>
          <div className="title-accent"></div>
        </div>
        
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-image">
                <img src={service.image} alt={service.title} />
                <div className="service-icon-container">
                  {service.icon}
                </div>
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, index) => (
                    <li key={index}>
                      <span className="feature-bullet">→</span> {feature}
                    </li>
                  ))}
                </ul>
                <button className="service-button">Explore Service</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="process-section">
        <div className="section-header">
          <h2 className="section-title">Our Design Process</h2>
          <p className="section-subtitle">A seamless journey from concept to completion</p>
          <div className="title-accent"></div>
        </div>
        
        <div className="process-steps">
          {processSteps.map((step) => (
            <div key={step.id} className="process-card">
              <div className="process-icon-circle">
                {step.icon}
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              <div className="step-number">{step.id}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="services-cta">
        <div className="cta-content">
          <h2>Ready to Begin Your Design Journey?</h2>
          <p>Let's collaborate to create spaces that inspire and elevate your lifestyle</p>
          <button className="cta-button">Schedule Consultation</button>
        </div>
      </div>
    </div>
  );
};

export default Services;