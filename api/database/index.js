const mysql = require('mysql2/promise');

const con = mysql.createConnection({
    host: process.env.ENV == 'local' ? "localhost" : "sword-health_db_1",
    user: "root",
    password: "1234",
    database: "sword"
});

module.exports = con;