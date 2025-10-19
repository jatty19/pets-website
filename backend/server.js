const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Create email transporter with Brevo SMTP
const transporter = nodemailer.createTransport({
  host: 'smtp-relay.brevo.com',
  port: 587,
  secure: false, // Use TLS
  auth: {
    user: process.env.BREVO_SMTP_USER, // Your Brevo email
    pass: process.env.BREVO_SMTP_KEY   // Your Brevo SMTP API key
  }
});

// Verify transporter connection
transporter.verify(function(error, success) {
  if (error) {
    console.log('SMTP Connection Error:', error);
  } else {
    console.log('SMTP Server is ready to send emails');
  }
});

// Newsletter subscription endpoint
app.post('/api/newsletter/subscribe', async (req, res) => {
  const { name, email } = req.body;

  // Validation
  if (!name || !email) {
    return res.status(400).json({ 
      success: false, 
      message: 'Name and email are required' 
    });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ 
      success: false, 
      message: 'Invalid email format' 
    });
  }

  try {
    // Email content
    const mailOptions = {
      from: `"All Natural Pet Treat Box" <${process.env.BREVO_SENDER_EMAIL}>`,
      to: email,
      subject: 'Welcome to All Natural Pet Treat Box! 🐾',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body { 
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; 
              line-height: 1.6; 
              color: #333; 
              margin: 0;
              padding: 0;
              background-color: #f5f5f5;
            }
            .container { 
              max-width: 600px; 
              margin: 0 auto; 
              background-color: #ffffff;
            }
            .header { 
              background-color: #f5ebe0; 
              padding: 40px 30px; 
              text-align: center; 
            }
            .logo { 
              font-size: 28px; 
              font-weight: bold; 
              color: #333; 
              margin-top: 10px;
            }
            .paw-icon {
              font-size: 48px;
              margin-bottom: 10px;
            }
            .subtitle {
              font-size: 14px;
              color: #666;
              margin-top: 5px;
            }
            .content { 
              padding: 40px 30px; 
              background-color: #fff; 
            }
            .greeting {
              font-size: 24px;
              font-weight: bold;
              color: #333;
              margin-bottom: 20px;
            }
            .discount-box { 
              background-color: #fff7ef; 
              border-left: 4px solid #ff7a18; 
              padding: 20px; 
              margin: 25px 0; 
              border-radius: 4px;
            }
            .discount-title {
              font-weight: bold;
              color: #ff7a18;
              font-size: 18px;
              margin: 0 0 10px 0;
            }
            .code { 
              background-color: #fff; 
              padding: 10px 20px; 
              border-radius: 6px; 
              font-family: 'Courier New', monospace; 
              font-weight: bold; 
              display: inline-block; 
              font-size: 20px;
              color: #ff7a18;
              border: 2px dashed #ff7a18;
              margin: 10px 0;
            }
            .code-label {
              font-size: 14px;
              color: #666;
              margin: 5px 0;
            }
            .benefits { 
              list-style: none; 
              padding: 0; 
              margin: 20px 0;
            }
            .benefits li { 
              padding: 10px 0;
              padding-left: 30px;
              position: relative;
            }
            .benefits li:before { 
              content: "✓"; 
              color: #ff7a18; 
              font-weight: bold; 
              font-size: 18px;
              position: absolute;
              left: 0;
            }
            .button { 
              display: inline-block; 
              background-color: #ff7a18; 
              color: white !important; 
              padding: 15px 40px; 
              text-decoration: none; 
              border-radius: 8px; 
              margin: 25px 0;
              font-weight: bold;
              font-size: 16px;
            }
            .button:hover {
              background-color: #ff6a00;
            }
            .footer { 
              background-color: #f8f8f8; 
              padding: 30px; 
              text-align: center; 
              font-size: 13px; 
              color: #666; 
            }
            .signature {
              margin-top: 30px;
              padding-top: 20px;
              border-top: 1px solid #eee;
            }
            @media only screen and (max-width: 600px) {
              .content, .header, .footer {
                padding: 20px !important;
              }
              .greeting {
                font-size: 20px;
              }
              .code {
                font-size: 16px;
                padding: 8px 16px;
              }
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="paw-icon">🐾</div>
              <div class="logo">ALL NATURAL PET TREAT BOX</div>
              <div class="subtitle">Premium Pet Treats & Nutrition</div>
            </div>
            
            <div class="content">
              <div class="greeting">Welcome to Our Pack! 🎉</div>
              
              <p>Hi ${name},</p>
              
              <p>Thank you for subscribing to our newsletter! We're thrilled to have you as part of the All Natural Pet Treat Box family.</p>
              
              <div class="discount-box">
                <div class="discount-title">🎁 Welcome Gift: 20% OFF Your First Order!</div>
                <div class="code-label">Use this code at checkout:</div>
                <div class="code">WELCOME20</div>
                <div class="code-label" style="font-size: 12px; color: #999;">Valid for 30 days on orders over $50</div>
              </div>

              <p><strong>As a subscriber, you'll be the first to know about:</strong></p>

              <ul class="benefits">
                <li>Exclusive discounts and special offers</li>
                <li>New product launches and seasonal treats</li>
                <li>Pet care tips and nutrition advice</li>
                <li>Early access to limited edition treat boxes</li>
              </ul>

              <div style="text-align: center;">
                <a href="${process.env.WEBSITE_URL || '#'}" class="button">Start Shopping Now</a>
              </div>

              <p>We can't wait to help you spoil your furry friends with our all-natural, wholesome treats!</p>

              <div class="signature">
                <p style="margin: 5px 0;">Happy tail-wagging! 🐕</p>
                <p style="margin: 5px 0;"><strong>The All Natural Pet Treat Box Team</strong></p>
              </div>
            </div>

            <div class="footer">
              <p style="margin: 10px 0;">© ${new Date().getFullYear()} All Natural Pet Treat Box. All rights reserved.</p>
              <p style="font-size: 11px; color: #999; margin-top: 15px;">
                You're receiving this email because you subscribed to our newsletter at allnaturalpettreats.com
              </p>
            </div>
          </div>
        </body>
        </html>
      `
    };

    // Send email via Brevo
    const info = await transporter.sendMail(mailOptions);

    // Log subscription (in production, save to database)
    console.log('New subscriber:', { 
      name, 
      email, 
      date: new Date().toISOString(),
      messageId: info.messageId 
    });

    res.status(200).json({ 
      success: true, 
      message: 'Successfully subscribed! Check your email for a welcome message.' 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send welcome email. Please try again later.' 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: 'Server is running',
    emailConfigured: !!(process.env.BREVO_SMTP_KEY && process.env.BREVO_SMTP_USER)
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
  console.log(`📧 Email provider: Brevo SMTP`);
  console.log(`🔗 API endpoint: http://localhost:${PORT}/api/newsletter/subscribe`);
});