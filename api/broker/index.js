const MongoClient = require('mongodb').MongoClient;

async function main() {
    let client, db;
    try {
        client = await MongoClient.connect("mongodb://" + (process.env.ENV == 'local' ? 'localhost' : 'sword-health_mongo_1'), { useNewUrlParser: true });
        db = client.db(dbName);
        return db.collection('tasks');
    } catch (err) { console.error(err); } // catch any mongo error here
}

module.exports = { main };