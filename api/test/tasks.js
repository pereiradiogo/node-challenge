//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../bin/www');
let should = chai.should();


chai.use(chaiHttp);


describe('Tasks', function() {
    describe('/GET tasks', () => {
        it('it should GET all the tasks', (done) => {
            // chai.request(server)
            //     .get('/taks')
            //     .end((err, res) => {
            //         res.should.have.status(200);
            //         res.body.should.be.a('array');
            //         res.body.length.should.be.eql(0);
            //         done();
            //     });
        });
    });

    describe('/POST task', () => {
        it('it should not POST a task', (done) => {
            // let task = {
            //     summary: "Clean database"
            // }
            // chai.request(server)
            //     .post('/tasks')
            //     .send(task)
            //     .end((err, res) => {
            //         res.should.have.status(201);
            //         done();
            //     });
        });

    });

    describe('/POST task', () => {
        it('it should not PUT a task', (done) => {
            // let task = {
            //     summary: "Clean database"
            // }
            // chai.request(server)
            //     .put('/tasks/1')
            //     .send(task)
            //     .end((err, res) => {
            //         res.should.have.status(200);
            //         done();
            //     });
        });

    });

    describe('/DELETE task', () => {
        it('it should not DELETE a task', (done) => {
            // chai.request(server)
            //     .delete('/tasks/1')
            //     .end((err, res) => {
            //         res.should.have.status(200);
            //         done();
            //     });
        });
    });
});