const mysql = require('mysql2/promise');

const con = mysql.createConnection({
    // host: "sword-health_db_1",
    host: "localhost",
    user: "root",
    password: "1234",
    database: "sword"
});

module.exports = con;