import React, { useState } from 'react';
import designStudioImage from '../Images/image1.avif';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { MdDesignServices } from 'react-icons/md';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.data.success) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error.response?.data || error.message);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Service display names for confirmation message
  const getServiceDisplayName = (service) => {
    const serviceNames = {
      residential: 'Residential Design',
      commercial: 'Commercial Design',
      hospitality: 'Hospitality Design',
      consultation: 'Design Consultation'
    };
    return serviceNames[service] || 'design service';
  };

  return (
    <div className="contact-page-container">
      {/* Hero Section */}
      <div className="contact-hero-section">
        <div className="contact-hero-content">
          <h1>Let's Create Something Beautiful</h1>
          <p>Our design team is ready to bring your vision to life</p>
        </div>
      </div>

      {/* Contact Cards */}
      <div className="contact-cards-wrapper">
        <div className="contact-info-card">
          <div className="contact-card-icon">
            <FaEnvelope />
          </div>
          <h3>Email Us</h3>
          <p>design@signatureinteriors.com</p>
          <span>Response within 24 hours</span>
        </div>

        <div className="contact-info-card">
          <div className="contact-card-icon">
            <FaPhone />
          </div>
          <h3>Call Us</h3>
          <p>+1 (555) 123-4567</p>
          <span>Mon-Fri, 9am-5pm EST</span>
        </div>

        <div className="contact-info-card">
          <div className="contact-card-icon">
            <FaMapMarkerAlt />
          </div>
          <h3>Visit Us</h3>
          <p>123 Design Avenue</p>
          <p>New York, NY 10001</p>
        </div>
      </div>

      {/* Contact Form Section */}
      {/* Contact Form Section */}
      <div className="contact-form-wrapper">
        <div className="contact-form-image">
          <img
            src={designStudioImage}
            alt="Our design studio"
            loading="lazy"
          />
          <div className="image-overlay-text">
            <h3>Our Design Studio</h3>
            <p>Schedule a visit to discuss your project in person</p>
          </div>
        </div>


        <div className="contact-form-content">
          <div className="form-header-section">
            <MdDesignServices className="form-title-icon" />
            <h2>Start Your Design Journey</h2>
            <p>Fill out the form below and we'll get back to you shortly</p>
          </div>

          {submitStatus === 'success' && (
            <div className="form-success-message">
              <h3>Thank you, {formData.firstName}!</h3>
              <p>We've received your {getServiceDisplayName(formData.service)} inquiry.</p>
              <p>Check your email for a confirmation and next steps.</p>
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="form-error-message">
              <h3>Something went wrong</h3>
              <p>Please try again later or contact us directly.</p>
            </div>
          )}

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name*</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name*</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address*</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="service">Service Interest*</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Select a service</option>
                <option value="residential">Residential Design</option>
                <option value="commercial">Commercial Design</option>
                <option value="hospitality">Hospitality Design</option>
                <option value="consultation">Design Consultation</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Project Details*</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="submit-form-button"
              disabled={isSubmitting}
            >
              <FaPaperPlane className="button-icon" />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;