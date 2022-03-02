const broker = require('../index');

/**
 * Create tasks broker
 * 
 * @returns array|exception
 */
async function create(summary) {
    broker.main().then((dbCollection) => {
        const notification = { message: summary }
        dbCollection.insertOne(notification, function(err, res) {
            if (err) throw err;
            console.log("1 document inserted");
        });
    });
}

/**
 * List tasks broker
 * 
 * @returns array|exception
 */
async function list() {
    broker.main().then(async(dbCollection) => {
        const result = await dbCollection.find();
        console.log(result);
    });
}

module.exports = { create, list };