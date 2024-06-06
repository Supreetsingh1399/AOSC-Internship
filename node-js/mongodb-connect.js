import mongoose from 'mongoose';

// MongoDB connection URL
const url = 'mongodb://localhost:27017/mydatabase';

// Connect to MongoDB
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        // Your code logic here
    })
    .catch((error) => {
        console.error('Failed to connect to MongoDB:', error);
    });