const db = require('../models');
const express = require('express');
const router = express.Router();

router.get('/api/books', (req, res) => {
    db.Book.find().then(dbModel => res.json(dbModel));
});

router.post('/api/books', (req, res) => {
    db.Book.create(req.body).then(dbModel => res.json(dbModel));
});

module.exports = router;