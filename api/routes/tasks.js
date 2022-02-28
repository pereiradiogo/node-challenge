const express = require('express')
const router = express.Router()
const tasksModel = require('../database/tasks')

/* GET tasks listing. */
router.get('/', function(req, res) {
    tasksModel.list().then((results) => {
        console.log(results);
        res.json({
            items: results,
            total: 0
        });
        res.status(200);
    }).catch(() => {

    });



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