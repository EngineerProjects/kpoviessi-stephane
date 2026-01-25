const nodemailer = require('nodemailer');

// Create a transporter using Gmail
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS  // Your Gmail app password
    }
});

/**
 * Send an email using Nodemailer
 * @param {Object} options - Email options
 * @param {string} options.name - Sender's name
 * @param {string} options.email - Sender's email
 * @param {string} options.message - Message content
 * @returns {Promise} - Promise that resolves when email is sent
 */
async function sendEmail({ name, email, message }) {
    try {
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER, // Send to yourself
            subject: `New Contact Form Message from ${name}`,
            text: `
                Name: ${name}
                Email: ${email}
                Message: ${message}
            `,
            html: `
                <h3>New Contact Form Message</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong> ${message}</p>
            `
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully:', info.response);
        return { success: true, message: 'Email sent successfully' };
    } catch (error) {
        console.error('Error sending email:', error);
        throw new Error('Failed to send email');
    }
}

// Example usage
async function testEmail() {
    try {
        const result = await sendEmail({
            name: 'Test User',
            email: 'test@example.com',
            message: 'This is a test message from the contact form.'
        });
        console.log(result);
    } catch (error) {
        console.error('Test failed:', error);
    }
}

// Uncomment the line below to run the test
// testEmail();

module.exports = { sendEmail };
