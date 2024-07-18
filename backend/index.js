require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const formRoutes = require('./routes/formRoutes')
const mongoose = require('mongoose');
// Initalize Express APP
const app = express();
const PORT = process.env.PORT || 5000;



// Using Middleware
app.use(cors());
// Middleware
app.use(bodyParser.json());



// Routes
app.get("/", function (req, res) {
    res.send('Hello World');
  })
app.use('/api/forms', formRoutes);

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/codeEditor')
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));


// Start Server
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});