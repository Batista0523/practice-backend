const express = require("express");

const {
  getAllBook,
  getOneBook,
  createBook,
  updateBook,
  deleteBook,
} = require("../Queries/books");

const Books = express.Router();

Books.get("/", async (req, res) => {
  try {
    const allTeam = await getAllBook();
    res.status(200).json({ success: true, payload: allTeam });
  } catch (err) {
    console.error("Error fetching all team", err);
    res.statusCode(500).json({ success: false, error: "Internal error" });
  }
});

Books.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const oneBook = await getOneBook(id);
    if (oneBook) {
      res.status(200).json({ success: true, payload: oneBook });
    } else {
      res.status(404).json({ success: false, error: "Books NOT found" });
    }
  } catch (err) {
    console.error("error fetching one book", err);
    res.status(500).json({ success: false, error: "Internal error" });
  }
});



module.exports = Books;
