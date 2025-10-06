// routes/data.js
const express = require('express');
const router = express.Router();
const { Reading } = require('../database/models');

router.post('/', async (req, res) => {
  try {
    const isBulk = Array.isArray(req.body);

    if (isBulk) {
      // Update bulk create to include measuredAt
      const readings = req.body.map(r => ({
        sensorId: r.sensorId,
        value: r.value,
        measuredAt: r.measuredAt // <-- Add this
      }));
      const savedReadings = await Reading.bulkCreate(readings);
      res.status(201).json(savedReadings);
    } else {
      // Update single create to include measuredAt
      const { sensorId, value, measuredAt } = req.body; // <-- Add this
      if (!sensorId || value === undefined || !measuredAt) {
        return res.status(400).json({ message: 'sensorId, value, and measuredAt are required.' });
      }
      const savedReading = await Reading.create({ sensorId, value, measuredAt });
      res.status(201).json(savedReading);
    }

  } catch (error) {
    console.error('Error saving sensor data:', error);
    res.status(500).json({ message: 'Failed to save sensor data', error: error.message });
  }
});

module.exports = router;