const express = require("express")
const cors = require("cors")
const app = express()
const teamControllers = require("./Controllers/teamControllers.js")
const booksController = require("./Controllers/booksControllers.js")
app.use(cors());
app.use(express.json());
app.use("/team" , teamControllers)
app.use("/books", booksController)
app.get("/", (req, res) => {
    res.send("Welcome to practice app");
  });
  app.get("*", (req, res) => {
    res.status(404).json({ success: false, data: { error: "page not found" } });
  });
  
  module.exports = app;
   