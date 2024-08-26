const express = require("express");
const dotenv = require('dotenv');
const { chats } = require("./data/data");
const connectDB = require("./config/database");
const colors = require('colors')
const userRoutes = require('./routes/user.route')

dotenv.config();
connectDB()
const app = express();


app.get("/", (req, res) => {
  res.send("API is running");
});

app.use('/api/user', userRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, console.log(`Server Started on PORT ${PORT}`.yellow.bold));
