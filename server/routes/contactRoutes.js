const express = require('express');
const router = express.Router();
const { sendEmail } = require('../controllers/contactController');

// @route   POST /api/contact
// @desc    Send a message via contact form
// @access  Public
router.post('/', sendEmail);

module.exports = router;
