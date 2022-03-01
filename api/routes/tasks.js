const express = require('express')
const router = express.Router()
const tasksModel = require('../database/tasks')

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
        res.send({ code: 400, message: 'Invalid request' });
        res.status(400);
    } else if (req.body.summary.length > 2500) {
        res.send({ code: 400, message: 'Summary is to long' });
        res.status(400);
    } else {
        tasksModel.create(req.body.summary).then(results => {
            res.send({ message: 'Task created' });
            res.status(201);
        }).catch(() => {
            res.send({ code: 500, message: 'Error to create tasks' });
            res.status(500);
        });
    }

});


/* UPDATE tasks. */
router.put('/:id', function(req, res) {
    if (!req.body.summary || !req.params.id || req.params.id == '') {
        res.send({ code: 400, message: 'Invalid request' });
        res.status(400);
    } else if (req.body.summary.length > 2500) {
        res.send({ code: 400, message: 'Summary is to long' });
        res.status(400);
    } else {
        tasksModel.update(req.params.id, req.body.summary).then(results => {
            if (results) {
                res.send({ message: 'Task updated' });
                res.status(200);
            } else {
                res.send({ message: 'Task not found' });
                res.status(404);
            }
        }).catch(() => {
            res.send({ code: 500, message: 'Error to update tasks' });
            res.status(500);
        });
    }
});

/* CREATE tasks. */
router.delete('/:id', function(req, res) {
    if (!req.params.id || req.params.id == '') {
        res.send({ code: 400, message: 'Invalid request' });
        res.status(400);
    } else {
        tasksModel.remove(req.params.id).then(results => {
            if (results) {
                res.send({ message: 'Task removed' });
                res.status(200);
            } else {
                res.send({ message: 'Task not found' });
                res.status(404);
            }
        }).catch(() => {
            res.send({ code: 500, message: 'Error on delete tasks' });
            res.status(500);
        });
    }

});

module.exports = router;