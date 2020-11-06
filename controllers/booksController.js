const db = require("../models");
const express = require("express");
const router = express.Router();

router.get("/api/books", (req, res) => {
  db.Book.find().then((dbModel) => res.json(dbModel));
});

router.post("/api/books", (req, res) => {
  db.Book.create(req.body).then((dbModel) => res.json(dbModel));
});

router.delete("/api/books", (req, res) => {
  db.Book.findOne({bookId: req.body.bookId})
    .then((dbModel) => dbModel.remove())
    .then((dbModel) => res.json(dbModel))
    .catch((err) => res.status(422).json(err));
});

module.exports = router;
