const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const contactRoutes = require('./routes/contactRoutes');

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/contact', contactRoutes);

// Root route
app.get('/', (req, res) => {
    res.send('Portfolio API is running...');
});

// Start Server
app.listen(port, () => {
    console.log(`Portfolio API: Active on port ${port}`);
});
