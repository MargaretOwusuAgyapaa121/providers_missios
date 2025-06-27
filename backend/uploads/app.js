const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
dotenv.config();

const contactRoutes = require('../routes/contact.route');
const authRoutes = require('../routes/auth.routes');
const sermonEventRoutes = require("../routes/sermonEventRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Serve /uploads from backend/uploads
app.use("/uploads", express.static(path.join(__dirname)));

app.use('/api/contact', contactRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/sermons-events', sermonEventRoutes);

module.exports = app;
