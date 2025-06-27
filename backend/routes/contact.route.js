// backend/routes/contact.route.js
const express = require('express');
const router = express.Router();
const { sendContactEmail } = require('../controllers/contactController.js');

router.post('/contact', sendContactEmail);

module.exports = router;
