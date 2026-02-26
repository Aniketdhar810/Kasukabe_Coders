const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
const connectDB = require('./config/db');

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
connectDB().then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log("Error connecting to MongoDB: ", err);
});



app.get('/', (req, res) => {
    res.send('Running on port ' + PORT);
});

