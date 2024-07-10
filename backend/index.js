require("dotenv").config();
const express = require("express");
const cors = require("cors");

// Initalize Express APP
const app = express();
const PORT = process.env.PORT || 5000;



// Using Middleware
app.use(cors());



// Routes
app.get("/", function (req, res) {
    res.send('Hello World');
  })




// Start Server
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});