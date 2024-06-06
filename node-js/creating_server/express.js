const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();
const express = require('express');
const app = express();

const postRoutes = require('./routes/post');
const port = 8080;

// Connect to db
mongoose.connect(process.env.URI)
  .then(() => console.log('DB connected'))
  .catch(err => console.log(`DB connection error: ${err.message}`));

// Middleware 
app.use('/', postRoutes);

// Start the server
app.listen(port, (err) => {
  if (err) {
    console.error(`Error starting server: ${err.message}`);
  } else {
    console.log(`Server is running on port ${port}`);
  }
});