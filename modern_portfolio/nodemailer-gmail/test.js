require('dotenv').config();
const { sendEmail } = require('./sendEmail');

async function test() {
    try {
        const result = await sendEmail({
            name: 'Test User',
            email: 'projectsengineer6@gmail.com',
            message: 'This is a test message from the contact form.'
        });
        console.log('Test result:', result);
    } catch (error) {
        console.error('Test failed:', error);
    }
}

test();