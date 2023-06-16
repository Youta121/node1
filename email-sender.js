const nodemailer = require('nodemailer');

async function sendEmail() {
  // Create a transporter object using SMTP transport
  const transporter = nodemailer.createTransport({
    host: 'your_email_host', // e.g., smtp.gmail.com
    port: 587, // Port for secure SMTP (TLS)
    secure: false, // Set to true if using port 465 (SSL)
    auth: {
      user: 'your_email_address',
      pass: 'your_email_password',
    },
  });

  try {
    // Send mail with defined transport object
    const info = await transporter.sendMail({
      from: 'your_email_address',
      to: 'recipient_email_address',
      subject: 'Hello from Node.js',
      text: 'This is a test email sent from Node.js.',
    });

    console.log('Email sent:', info.messageId);
  } catch (error) {
    console.error('Error occurred while sending email:', error);
  }
}

sendEmail();