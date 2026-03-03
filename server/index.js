const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { Resend } = require('resend');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const resend = new Resend(process.env.RESEND_API_KEY);

app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
    const { name, email, subject, message } = req.body;

    // Check for placeholder API key
    if (process.env.RESEND_API_KEY === 're_your_api_key_here' || !process.env.RESEND_API_KEY) {
        console.error('Contact Form Error: Resend API Key is missing or using placeholder.');
        return res.status(500).json({
            success: false,
            error: 'Server configuration error: Resend API Key is missing. Please add a valid key to the server .env file.'
        });
    }

    // Basic Validation
    if (!name || !email || !subject || !message) {
        return res.status(400).json({ success: false, error: 'All fields are required.' });
    }

    if (message.length < 10) {
        return res.status(400).json({ success: false, error: 'Message must be at least 10 characters long.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ success: false, error: 'Invalid email format.' });
    }

    try {
        const { data, error } = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>', // Resend verified domain needed for custom 'from'
            to: ['priyadarshanwork24@gmail.com'],
            reply_to: email,
            subject: `New Contact Form Submission: ${subject}`,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
                    <h2 style="color: #333; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">New Message Received</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Subject:</strong> ${subject}</p>
                    <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-radius: 5px;">
                        <p><strong>Message:</strong></p>
                        <p style="white-space: pre-wrap;">${message}</p>
                    </div>
                </div>
            `
        });

        if (error) {
            console.error('Resend Error:', error);
            return res.status(500).json({ success: false, error: error.message });
        }

        res.status(200).json({ success: true, message: 'Thank you. Your message has been sent.' });
    } catch (err) {
        console.error('Server Internal Error:', err);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
