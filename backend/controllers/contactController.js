// backend/controllers/contactController.js
const nodemailer = require('nodemailer');

const sendContactEmail = async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Please fill in all fields.' });
  }

  // ✅ Mailtrap Transporter Setup
  const transporter = nodemailer.createTransport({
    host: process.env.MAILTRAP_HOST,
    port: process.env.MAILTRAP_PORT,
    auth: {
      user: process.env.MAILTRAP_USER,
      pass: process.env.MAILTRAP_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_TO || 'test@example.com', // or a Mailtrap inbox email
    subject: `New Contact from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Subject: ${subject}
      Message:
      ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Email failed to send.', details: error.message });
  }
};

module.exports = { sendContactEmail };
