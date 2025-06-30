require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Validate environment variables
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.ADMIN_EMAIL) {
  console.error('❌ Missing required environment variables');
  process.exit(1);
}

// Email transporter with verification
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Contact endpoint with dual emails
app.post('/api/contact', async (req, res) => {
  const { firstName, lastName, email, phone, service, message } = req.body;

  // Validate required fields
  if (!firstName || !lastName || !email || !service || !message) {
    return res.status(400).json({ 
      error: 'Missing required fields',
      missingFields: {
        firstName: !firstName,
        lastName: !lastName,
        email: !email,
        service: !service,
        message: !message
      }
    });
  }

  try {
    // Email to admin
    const adminMail = {
      from: `"Website Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `New ${service} Inquiry from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif;">
          <h2 style="color: #2a2a2a;">New Contact Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; width: 120px;"><strong>Name:</strong></td><td>${firstName} ${lastName}</td></tr>
            <tr><td><strong>Email:</strong></td><td><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td><strong>Phone:</strong></td><td>${phone || 'Not provided'}</td></tr>
            <tr><td><strong>Service:</strong></td><td>${service}</td></tr>
          </table>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `
    };

    // Confirmation email to customer
    const customerMail = {
      from: `"Signature Interiors" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `We've received your ${service} inquiry, ${firstName}!`,
      html: `
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="text-align: center; margin-bottom: 25px;">
            <h1 style="color: #2a2a2a;">Signature Interiors</h1>
          </div>
          
          <div style="background: #ffffff; padding: 25px; border-radius: 8px;">
            <h2 style="color: #d4a762; margin-top: 0;">Thank you, ${firstName}!</h2>
            
            <p>We've received your ${service.toLowerCase()} inquiry and are excited to work with you.</p>
            
            <div style="background: #f8f8f8; padding: 15px; border-left: 3px solid #d4a762; margin: 20px 0;">
              <p style="margin: 0; font-style: italic;">"${message}"</p>
            </div>
            
            <h3 style="color: #2a2a2a;">What happens next:</h3>
            <ol style="padding-left: 20px;">
              <li>Our design team will review your request within <strong>24 hours</strong></li>
              <li>We'll contact you at ${phone ? phone : email} to discuss next steps</li>
              <li>We'll schedule a consultation at your convenience</li>
            </ol>
            
            <p>In the meantime, feel free to explore our <a href="https://yourwebsite.com/portfolio" 
               style="color: #d4a762; text-decoration: none;">portfolio</a> for inspiration.</p>
            
            <p>Warm regards,<br>
            <strong>The Signature Interiors Team</strong></p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; color: #777; font-size: 12px;">
            <p>Signature Interiors • 123 Design Avenue • New York, NY 10001</p>
            <p>Need immediate help? Call <a href="tel:+15551234567" style="color: #d4a762;">(555) 123-4567</a></p>
          </div>
        </div>
      `,
      text: `Thank you ${firstName},\n\nWe've received your ${service} inquiry:\n\n"${message}"\n\nNext Steps:\n1. Team review within 24 hours\n2. We'll contact you at ${phone ? phone : email}\n3. Schedule consultation\n\nPortfolio: https://yourwebsite.com/portfolio\n\nSignature Interiors\n123 Design Ave\nNY 10001\n(555) 123-4567`
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(adminMail),
      transporter.sendMail(customerMail)
    ]);

    res.json({ success: true });
  } catch (error) {
    console.error('Email error:', {
      message: error.message,
      stack: error.stack,
      env: {
        emailUser: !!process.env.EMAIL_USER,
        adminEmail: !!process.env.ADMIN_EMAIL
      }
    });
    res.status(500).json({ 
      error: 'Failed to send message',
      details: process.env.NODE_ENV === 'development' ? error.message : null
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📧 Admin notifications to: ${process.env.ADMIN_EMAIL}`);
});