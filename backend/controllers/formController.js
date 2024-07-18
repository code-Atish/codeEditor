// controllers/formController.js
const Form = require('../models/Form');

const submitForm = async (req, res) => {
  const { name, date, interestReason, howHeard } = req.body;

  try {
    const newForm = new Form({ name, date, interestReason, howHeard });
    await newForm.save();
    res.status(201).json({ message: 'Form submitted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while submitting the form' });
  }
};

module.exports = {
  submitForm
};
