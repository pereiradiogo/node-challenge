const express = require('express');
const router = express.Router();

/* GET tasks listing. */
router.get('/', function(req, res) {
    res.json({
        items: [],
        total: 0
    });
    res.status(200);
});

/* CREATE tasks. */
router.post('/', function(req, res) {
    res.json({
        items: [],
        total: 0
    })
    res.status(201)
});

module.exports = router;