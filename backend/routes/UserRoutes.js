// contains user routes
const express = require('express');
const router = express.Router();
const Form = require('../models/Form');

// Route to handle form submission
router.post('/submit', async (req, res) => {
  const { name, date, interestReason, howHeard } = req.body;

  try {
    const formData = new Form({
      name,
      date,
      interestReason,
      howHeard,
    });

    await formData.save();
    res.status(200).json({ message: 'Form submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting form', error });
  }
});

module.exports = router;
