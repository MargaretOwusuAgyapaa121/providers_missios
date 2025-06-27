const express = require('express');
const router = express.Router();
const logic= require('../controllers/auth.controller');

router.post('/login', logic.login);

module.exports = router;