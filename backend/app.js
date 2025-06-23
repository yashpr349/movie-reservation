require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./db/db');
const userRoutes = require('./routes/user.route');
const adminRoutes = require('./routes/admin.route');
connectDB(); // Connect to MongoDB

app.use(morgan('dev')); // Logging middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', userRoutes)
app.use('/admin', adminRoutes)
module.exports = app;