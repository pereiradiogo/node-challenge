const connection = require('../index');

async function list() {

    // connection.connect(function(err) {
    // if (err) throw err;
    return await connection.query("SELECT * FROM tasks");

    // });

}

module.exports = { list }