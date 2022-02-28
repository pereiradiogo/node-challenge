const connection = require('../index');

/**
 * Return tasks list
 * 
 * @returns array|exception
 */
async function list() {
    return connection.then((conn) => {
        return conn.query("SELECT * FROM tasks");
    }).then((result, fields) => {
        return result[0];
    });
}

/**
 * Create new task
 * @param {string} summary 
 * @returns 
 */
async function create(summary) {
    return connection.then((conn) => {
        return conn.query("INSERT INTO tasks (summary) VALUES ('" + summary + "');");
    }).then((result, fields) => {
        return result[0].affectedRows;
    }).catch((error) => {
        console.log(error);
    })
}


module.exports = { list, create }