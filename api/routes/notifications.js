const express = require('express')
const router = express.Router()
const tasksBroker = require('../broker/tasks')

/* GET tasks listing. */
router.get('/', function(req, res) {
    tasksBroker.list().then(results => {
        res.json({
            items: results,
            total: 0
        });
        res.status(200);
    }).catch(() => {
        res.send({ code: 500, message: 'Error to get tasks' });
        res.status(500);
    });

});

module.exports = router;