const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI, {
  
});

const TicketSchema = new mongoose.Schema({
  name: String,
  email: String,
  priority: String,
  service: String,
  query: String,
  createdAt: { type: Date, default: Date.now }
});

const Ticket = mongoose.model('Ticket', TicketSchema);

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

app.post('/api/support', async (req, res) => {
  const { name, email, priority, service, query } = req.body;

  const ticket = new Ticket({ name, email, priority, service, query });

  try {
    await ticket.save();

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: 'New Support Ticket',
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #f5f5f5; padding: 20px;">
          <h2 style="color: #333;">New Support Ticket</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Priority:</strong> ${priority}</p>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Query:</strong> ${query}</p>
          <hr style="border: none; border-top: 1px solid #ccc; margin: 20px 0;">
          <p style="color: #666;">This is an automatically generated email. Please do not reply to this message.</p>
        </div>
      `
    };

    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Support Ticket Submitted',
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #f5f5f5; padding: 20px;">
          <h2 style="color: #333;">Support Ticket Submitted</h2>
          <p>Dear ${name},</p>
          <p>Thank you for submitting a support ticket. Our team will review your request and get back to you as soon as possible.</p>
          <p>Here are the details of your submitted ticket:</p>
          <ul>
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Priority:</strong> ${priority}</li>
            <li><strong>Service:</strong> ${service}</li>
            <li><strong>Query:</strong> ${query}</li>
          </ul>
          <p>If you have any further questions or need additional assistance, please feel free to reach out to us.</p>
          <p>Best regards,<br>The Support Team</p>
        </div>
      `
    };

    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        return res.status(500).send(error.toString());
      }
      transporter.sendMail(userMailOptions, (error) => {
        if (error) {
          return res.status(500).send(error.toString());
        }
        res.status(200).send('Ticket submitted successfully!');
      });
    });
  } catch (error) {
    res.status(500).send('There was an error submitting your ticket.');
  }
});

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  console.log('Received contact form data:', { name, email, message });

  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: 'New Contact Form Submission',
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #f5f5f5; padding: 20px;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
          <hr style="border: none; border-top: 1px solid #ccc; margin: 20px 0;">
          <p style="color: #666;">This is an automatically generated email. Please do not reply to this message.</p>
        </div>
      `
    };

    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank You for Contacting Us',
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #f5f5f5; padding: 20px;">
          <h2 style="color: #333;">Thank You for Contacting Us</h2>
          <p>Dear ${name},</p>
          <p>Thank you for reaching out to us. We have received your message and will get back to you as soon as possible.</p>
          <p>Here are the details of your message:</p>
          <ul>
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Message:</strong> ${message}</li>
          </ul>
          <p>If you have any further questions or need additional assistance, please feel free to reply to this email.</p>
          <p>Best regards,<br>The Contact Team</p>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    console.log('Admin email sent');

    await transporter.sendMail(userMailOptions);
    console.log('User email sent');

    res.status(200).send('Message sent successfully!');
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).send('There was an error sending your message.');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
