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
        return result[0].affectedRows > 0;
    }).catch((error) => {
        console.log(error);
    })
}

/**
 * Update new task
 * @param {integer} id 
 * @param {string} summary 
 * @returns 
 */
async function update(id, summary) {
    return connection.then((conn) => {
        return conn.query("UPDATE tasks SET summary = '" + summary + "' WHERE id = " + id);
    }).then((result, fields) => {
        return result[0].affectedRows > 0;
    }).catch((error) => {
        console.log(error);
    })
}

/**
 * Delete task
 * @param {integer} id 
 * @returns 
 */
async function remove(id) {
    return connection.then((conn) => {
        return conn.query("DELETE FROM tasks WHERE id = " + id + ";");
    }).then((result, fields) => {
        return result[0].affectedRows > 0;
    }).catch((error) => {
        console.log(error);
    })
}


module.exports = { list, create, update, remove }