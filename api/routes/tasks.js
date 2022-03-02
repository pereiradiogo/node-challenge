const express = require('express')
const router = express.Router()
const tasksModel = require('../database/tasks')
const tasksBroker = require('../broker/tasks')

/* GET tasks listing. */
router.get('/', function(req, res) {

    tasksModel.list().then(results => {
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

/* CREATE tasks. */
router.post('/', function(req, res) {
    if (!req.body.summary) {
        res.status(400);
        res.send({ code: 400, message: 'Invalid request' });
    } else if (req.body.summary.length > 2500) {
        res.status(400);
        res.send({ code: 400, message: 'Summary is to long' });
    } else {
        tasksModel.create(req.body.summary).then(results => {

            tasksBroker.create(req.body.summary);

            res.status(201);
            res.send({ message: 'Task created' });
        }).catch(() => {
            res.status(500);
            res.send({ code: 500, message: 'Error to create tasks' });
        });
    }

});


/* UPDATE tasks. */
router.put('/:id', function(req, res) {
    if (!req.body.summary || !req.params.id || req.params.id == '') {
        res.status(400);
        res.send({ code: 400, message: 'Invalid request' });
    } else if (req.body.summary.length > 2500) {
        res.status(400);
        res.send({ code: 400, message: 'Summary is to long' });
    } else {
        tasksModel.update(req.params.id, req.body.summary).then(results => {
            if (results) {
                res.status(200);
                res.send({ message: 'Task updated' });
            } else {
                res.status(404);
                res.send({ message: 'Task not found' });
            }
        }).catch(() => {
            res.status(500);
            res.send({ code: 500, message: 'Error to update tasks' });
        });
    }
});

/* CREATE tasks. */
router.delete('/:id', function(req, res) {
    if (!req.params.id || req.params.id == '') {
        res.status(400);
        res.send({ code: 400, message: 'Invalid request' });
    } else {
        tasksModel.remove(req.params.id).then(results => {
            if (results) {
                res.status(200);
                res.send({ message: 'Task removed' });
            } else {
                res.status(404);
                res.send({ message: 'Task not found' });
            }
        }).catch(() => {
            res.status(500);
            res.send({ code: 500, message: 'Error on delete tasks' });
        });
    }

});

module.exports = router;