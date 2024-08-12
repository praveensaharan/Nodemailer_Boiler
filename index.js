require("dotenv").config();
const nodemailer = require("nodemailer");

// Function to create a transporter object and send an email
async function sendEmail({ user, pass, to, subject, htmlContent }) {
  // Create a transporter object using Gmail's service
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user, // Gmail address
      pass, // Gmail app-specific password or regular password
    },
  });

  try {
    // Send the email
    const result = await transporter.sendMail({
      from: user, // Sender address
      to, // Receiver address
      subject, // Subject line
      html: htmlContent, // HTML body
    });

    // Log the result in a formatted manner
    console.log(JSON.stringify(result, null, 4));
  } catch (error) {
    console.error("Error sending email:", error); // Catch and log any errors
  }
}

// Example HTML content
const htmlTemplate = `
  <div style="font-family: Arial, sans-serif; line-height: 1.6;">
    <h2 style="color: #2E86C1;">Welcome to Our Service!</h2>
    <p>Dear User,</p>
    <p>Thank you for joining us. We're excited to have you on board.</p>
    <p>
      <strong>Get started:</strong>
      <ul>
        <li>Explore our features</li>
        <li>Connect with others</li>
        <li>Enjoy our services</li>
      </ul>
    </p>
    <p>Best regards,</p>
    <p>The Team</p>
    <footer style="margin-top: 20px;">
      <hr style="border: none; border-top: 1px solid #ddd;">
      <p style="font-size: 0.9em; color: #777;">
        © 2024 Your Company. All rights reserved.<br>
        <a href="https://www.yourcompany.com" style="color: #2E86C1;">Visit our website</a> | <a href="#" style="color: #2E86C1;">Unsubscribe</a>
      </p>
    </footer>
  </div>
`;

// Send the email using the HTML template
sendEmail({
  user: process.env.EMAIL_USER,
  pass: process.env.EMAIL_PASS,
  to: "praveen40109@gmail.com",
  subject: "Welcome to Our Service!",
  htmlContent: htmlTemplate,
});
