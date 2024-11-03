// mongoose-connection.js
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/scatch')
    .then(function(connection) {
        console.log("Connected to MongoDB"); // Log on successful connection
    })
    .catch(function(error) {
        console.log("MongoDB not connected: " + error.message); // Log error message
    });

module.exports = mongoose; // Export the mongoose instance
