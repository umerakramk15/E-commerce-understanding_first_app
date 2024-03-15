const express = require("express");
const app = express();

const mongoose = require("mongoose");
const connectDB = async () => {
  mongoose
    .connect(" mongodb://127.0.0.1:27017/e-commerce_first_app")
    .then(() => {
      console.log("MongoDB Connected");
    })
    .catch(() => {
      console.log("Error");
    });
};

app.get("/", (req, res) => {
  res.send("App is Working");
});

app.listen(8000, () => {
  console.log("Server Started");
});
