const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const cookieParser = require('cookie-parser');

const authRoutes = require("./routes/authRoutes")

const app = express();
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
}));
app.use(cookieParser())

mongoose.connect('mongodb://127.0.0.1:27017/authtemplate')

app.use(authRoutes);

app.listen(process.env.SERVER_PORT || 3001, () => {
    console.log('Server is running');
})
