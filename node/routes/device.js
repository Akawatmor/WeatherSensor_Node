// routes/devices.js
const express = require('express');
const router = express.Router();
const { Device } = require('../database/models');

// POST /api/v1/devices - Create a new device
router.post('/', async (req, res) => {
  try {
    const { name, location } = req.body;
    if (!name) {
      return res.status(400).json({ message: 'Device name is required.' });
    }
    const newDevice = await Device.create({ name, location });
    res.status(201).json(newDevice);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create device', error: error.message });
  }
});

// DELETE /api/v1/devices/:id - Delete a device
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Device.destroy({
      where: { id: id }
    });

    if (deleted) {
      res.status(200).json({ message: 'Device deleted successfully.' });
    } else {
      res.status(404).json({ message: 'Device not found.' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete device', error: error.message });
  }
});

module.exports = router;