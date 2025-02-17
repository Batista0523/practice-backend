const db = require("../db/db.Config");

const getAllBook = async () => {
  try {
    const allBook = await db.any("SELECT * FROM books");
    return allBook;
  } catch (err) {
    console.error("Internal error fetchign all books", err);
    throw err;
  }
};

const getOneBook = async (id) => {
  try {
    const oneBook = await db.one("SELECT * FROM books WHERE id=$1", [id]);
    return oneBook;
  } catch (err) {
    console.error("Internal error fetching one book", err);
    throw err;
  }
};

const createBook = async (book) => {
  try {
    const { title, author, genre, available_date, image } = book;
    const createdBook = await db.one(
      "INSERT INTO book (title, author ,genre ,available_date , image) VALUES($1,$2,$3,$4,$5) RETURNING *",
      [title, author, genre, available_date, image]
    );
    return createdBook;
  } catch (err) {
    console.error("Internal error creating book", err);
    throw err;
  }
};

const deleteBook = async (id) => {
  try {
    const deletedBook = await db.one(
      "DELETE FROM books WHERE id=$1 RETURNING *",
      [id]
    );
    return deletedBook;
  } catch (err) {
    console.error("Internal error deleting a book", err);
    throw err;
  }
};

const updateBook = async (id, book) => {
  try {
    const { title, author, genre, available_date, image } = book;
    const updatedBook = await db.one(
      "UPDATE books SET title=$1, author=$2,genre=$3,available_date=$4,image=$5 WHERE id=$6 RETURNING *",
      [title, author, genre, available_date, image, id]
    );
    return updatedBook;
  } catch (err) {
    console.error("Internal error updating the book", err);
    throw err;
  }
};

module.exports = {
    getAllBook,
    getOneBook,
    createBook,
    updateBook,
    deleteBook
}