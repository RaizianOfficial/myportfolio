import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Resolve the absolute path to ../.env regardless of where the server is launched from
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: join(__dirname, '..', '.env') });

const app = express();
const PORT = process.env.SMTP_PORT_SERVER || 3001;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
}));
app.use(express.json());

// Create Nodemailer transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

// POST /api/contact
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  // Basic email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address.' });
  }

  try {
    const transporter = createTransporter();

    // Email to the portfolio owner
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO || process.env.SMTP_USER,
      replyTo: email,
      subject: `New contact from ${name} — Portfolio`,
      html: `
        <div style="font-family: 'Helvetica Neue', sans-serif; max-width: 600px; margin: 0 auto; background: #fff; border: 3px solid #000; padding: 32px;">
          <h1 style="font-size: 28px; font-weight: 900; text-transform: uppercase; letter-spacing: -1px; border-bottom: 3px solid #ccff00; padding-bottom: 16px; margin-bottom: 24px;">
            New Message — Portfolio
          </h1>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 2px solid #f0f0f0; font-weight: 700; width: 100px; text-transform: uppercase; font-size: 12px; letter-spacing: 1px;">Name</td>
              <td style="padding: 12px 0; border-bottom: 2px solid #f0f0f0; font-size: 16px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 2px solid #f0f0f0; font-weight: 700; text-transform: uppercase; font-size: 12px; letter-spacing: 1px;">Email</td>
              <td style="padding: 12px 0; border-bottom: 2px solid #f0f0f0; font-size: 16px;"><a href="mailto:${email}" style="color: #000; font-weight: 700;">${email}</a></td>
            </tr>
          </table>
          <div style="margin-top: 24px;">
            <p style="font-weight: 700; text-transform: uppercase; font-size: 12px; letter-spacing: 1px; margin-bottom: 12px;">Message</p>
            <div style="background: #f9f9f9; border-left: 4px solid #ccff00; padding: 16px; white-space: pre-wrap; font-size: 16px; line-height: 1.6;">${message}</div>
          </div>
          <p style="margin-top: 32px; font-size: 12px; color: #666; text-transform: uppercase; letter-spacing: 1px;">Sent via raizian.in portfolio contact form</p>
        </div>
      `,
    });

    // Auto-reply to the sender
    await transporter.sendMail({
      from: `"Sunny Rawat — Raizian" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `Got your message, ${name}!`,
      html: `
        <div style="font-family: 'Helvetica Neue', sans-serif; max-width: 600px; margin: 0 auto; background: #fff; border: 3px solid #000; padding: 32px;">
          <h1 style="font-size: 28px; font-weight: 900; text-transform: uppercase; letter-spacing: -1px; margin-bottom: 24px;">
            Hey ${name}, got it!
          </h1>
          <p style="font-size: 16px; line-height: 1.7; margin-bottom: 24px;">
            Thanks for reaching out. I've received your message and will get back to you as soon as possible — typically within 24–48 hours.
          </p>
          <div style="background: #ccff00; border: 3px solid #000; padding: 16px; margin-bottom: 24px;">
            <p style="font-weight: 700; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; margin: 0;">Your message summary:</p>
            <p style="margin: 8px 0 0 0; font-size: 14px; color: #333;">"${message.substring(0, 200)}${message.length > 200 ? '...' : ''}"</p>
          </div>
          <p style="font-size: 16px; line-height: 1.7;">
            — Sunny Rawat<br />
            <strong>Founder, Raizian</strong><br />
            <a href="https://portfolio.raizian.in" style="color: #000;">portfolio.raizian.in</a>
          </p>
        </div>
      `,
    });

    return res.status(200).json({ success: true, message: 'Email sent successfully.' });
  } catch (error) {
    console.error('SMTP Error:', error);
    return res.status(500).json({ error: 'Failed to send email. Please try again.' });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`📬 Email server running at http://localhost:${PORT}`);
});
