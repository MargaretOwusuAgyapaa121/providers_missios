const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path'); // ✅ Added this
dotenv.config();

const contactRoutes = require('../routes/contact.route');
const authRoutes = require('../routes/auth.routes');
const sermonEventRoutes = require("../routes/sermonEventRoutes"); // ✅ Check file name too

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use('/api/contact', contactRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/sermons-events', sermonEventRoutes);

module.exports = app;
