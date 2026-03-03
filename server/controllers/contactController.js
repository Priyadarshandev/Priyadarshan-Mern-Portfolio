const { Resend } = require('resend');
const dotenv = require('dotenv');

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Handle Contact Form Submission
 * @route POST /api/contact
 */
const sendEmail = async (req, res) => {
    const { name, email, subject, message } = req.body;

    if (process.env.RESEND_API_KEY === 're_your_api_key_here' || !process.env.RESEND_API_KEY) {
        return res.status(500).json({
            success: false,
            error: 'Server configuration error: Resend API Key is missing.'
        });
    }

    // Basic Validation
    if (!name || !email || !subject || !message) {
        return res.status(400).json({ success: false, error: 'All fields are required.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ success: false, error: 'Invalid email format.' });
    }

    if (message.length < 10) {
        return res.status(400).json({ success: false, error: 'Message must be at least 10 characters long.' });
    }

    try {
        const { data, error } = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
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
            return res.status(500).json({ success: false, error: error.message });
        }

        res.status(200).json({ success: true, message: 'Message sent successfully.' });
    } catch (err) {
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
};

module.exports = {
    sendEmail
};
