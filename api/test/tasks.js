//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();


chai.use(chaiHttp);


describe('Tasks', function() {
    describe('/GET tasks', () => {
        it('it should GET all the tasks', (done) => {
            chai.request(server)
                .get('/tasks')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.items.should.be.a('array');
                    res.body.items.length.should.be.gte(0);
                    done();
                });
        });
    });

    describe('/POST task', () => {
        it('it should POST a task', (done) => {
            let task = {
                summary: "Clean database"
            }
            chai.request(server)
                .post('/tasks')
                .send(task)
                .end((err, res) => {
                    res.should.have.status(201);
                    done();
                });
        });

    });

    describe('/POST task', () => {
        it('it should not POST a task', (done) => {
            let task = {
                summary: ""
            }
            chai.request(server)
                .post('/tasks')
                .send(task)
                .end((err, res) => {
                    res.should.have.status(400);
                    done();
                });
        });

    });

    describe('/PUT task', () => {
        it('it should PUT a task', (done) => {
            let task = {
                summary: "Clean database"
            }
            chai.request(server)
                .put('/tasks/1')
                .send(task)
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });

    describe('/PUT task', () => {
        it('it should not PUT a task', (done) => {
            let task = {
                summary: "Clean database"
            }
            chai.request(server)
                .put('/tasks/5')
                .send(task)
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                });
        });
    });

    describe('/DELETE task', () => {
        it('it should DELETE a task', (done) => {
            chai.request(server)
                .delete('/tasks/1')
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });

    describe('/DELETE task', () => {
        it('it should DELETE a task', (done) => {
            chai.request(server)
                .delete('/tasks/5')
                .end((err, res) => {
                    res.should.have.status(404);
                    done();
                });
        });
    });

});