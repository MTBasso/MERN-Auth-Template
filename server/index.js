const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const cookieParser = require('cookie-parser');

const authRoutes = require("./routes/authRoutes")

const app = express();
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));
app.use(cookieParser())

mongoose.connect('mongodb://127.0.0.1:27017/authtemplate')

app.use(authRoutes);

module.exports = app;