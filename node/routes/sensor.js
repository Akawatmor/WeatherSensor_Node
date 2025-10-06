// routes/sensors.js
const express = require('express');
const router = express.Router();
const { Sensor } = require('../database/models');

// POST /api/v1/sensors - Register a new sensor for a device
router.post('/', async (req, res) => {
  try {
    const { deviceId, type, unit } = req.body;
    if (!deviceId || !type || !unit) {
      return res.status(400).json({ message: 'deviceId, type, and unit are required.' });
    }
    const newSensor = await Sensor.create({ deviceId, type, unit });
    res.status(201).json(newSensor);
  } catch (error) {
    res.status(500).json({ message: 'Failed to register sensor', error: error.message });
  }
});

// DELETE /api/v1/sensors/:id - Delete a sensor
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Sensor.destroy({
      where: { id: id }
    });

    if (deleted) {
      res.status(200).json({ message: 'Sensor deleted successfully.' });
    } else {
      res.status(404).json({ message: 'Sensor not found.' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete sensor', error: error.message });
  }
});

module.exports = router;