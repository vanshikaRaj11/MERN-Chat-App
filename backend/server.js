const express = require("express");
const dotenv = require('dotenv');
const { chats } = require("./data/data");

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  // console.log(req.params.id);
  const singeChat = chats.find((chat) => chat._id === req.params.id);
  res.send(singeChat);
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, console.log(`Server Started on PORT ${PORT}`));
