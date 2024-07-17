// contains user schema
const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  interestReason: {
    type: String,
    required: true,
  },
  howHeard: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Form', formSchema);
