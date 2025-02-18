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

Books.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBook = await deleteBook(id);
    if (deletedBook) {
      res.status(200).json({ success: true, payload: deletedBook });
    } else {
      res.status(404).json * { success: false, error: "Book Not found" };
    }
  } catch (err) {
    console.error("Error deleting book", err);
    res.status(500).json({ success: false, error: "Internal error " });
  }
});

Books.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBook = await updateBook(id, req.body);
    if (updatedBook) {
      res.status(200).json({ success: true, payload: updatedBook });
    } else {
      res.status(404).json({ success: false, error: "Book not found" });
    }
  } catch (err) {
    console.error("Internal Error", err);
    res.status(500).json({ success: false, error: "Internal error" });
  }
});

Books.post("/", async (req, res) => {
  try {
    const createdBook = await createBook(req.body);
    if (createdBook) {
      res.status(201).json({ success: true, payload: createdBook });
    } else {
      res.status(404).json({ success: false, error: "Book not found" });
    }
  } catch (err) {
    console.error("Error creating team internal", err);
    res.status(500).json({ success: false, error: "error internal" });
  }
});


module.exports = Books;
