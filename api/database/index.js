const mysql = require('mysql2');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "sword"
});

module.exports = con;