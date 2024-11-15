const express = require("express");
const Book = require("../models/bookModel");
const bookRouter = express.Router();

bookRouter.post("/addBook", async (req, res) => {
  try {
    const { title, author, description } = req.body;
    if (!title || !author || !description) {
      throw new Error("Please Provide all the fields");
    }

    const book = new Book({
      title,
      author,
      description,
    });

    const savedBook = await book.save();
    res.send(savedBook);
  } catch (error) {
    res.status(400).send("Error: " + error.message);
  }
});

bookRouter.delete("/deleteBook/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      throw new Error("Please provide the id");
    }
    const deletedBook = await Book.findByIdAndDelete({ _id: id });

    // console.log(deletedBook);

    if (!deletedBook) {
      throw new Error("Book Does not exist!");
    }

    res.send("Book Deleted successfully!");
  } catch (error) {
    res.status(400).send("Error: " + error.message);
  }
});

bookRouter.get("/getAllBooks", async (req, res) => {
  try {
    const allBooks = await Book.find();
    if (allBooks.length === 0) {
      throw new Error("No book found!");
    }
    res.send(allBooks);
  } catch (error) {
    res.status(400).send("Error: " + error.message);
  }
});

module.exports = bookRouter;
