// index.js
require('dotenv').config();
const express = require('express');
const { sequelize } = require('./database/models');

// Import all route files
const dataRoutes = require('./routes/data');
const sensorRoutes = require('./routes/sensors');
const deviceRoutes = require('./routes/devices');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes - Add the new routes here
app.use('/api/v1/devices', deviceRoutes);
app.use('/api/v1/sensors', sensorRoutes);
app.use('/api/v1/readings', dataRoutes);

// ... (startServer function remains the same)

startServer();