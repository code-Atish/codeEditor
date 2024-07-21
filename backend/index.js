
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const formRoutes = require('./routes/formRoutes')
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

// Using Middleware
app.use(cors());

// Middleware
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

// Use Routes
app.use('/api', userRoutes);

app.use('/api/forms', formRoutes);

app.get('/', (req, res) => {
  res.send('Hello World');
});


// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
