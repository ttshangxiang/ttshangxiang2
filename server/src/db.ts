
import { MongoClient } from 'mongodb';

// Connection URL
const url = 'mongodb://ttsx:112439416@119.23.238.67:27017/ttsx';
// Database name
const dbName = 'ttsx';

export default async function (callback) {

    let client;
    let result;
    try {
        // Use connect method to connect to the server
        client = await MongoClient.connect(url);

        const db = client.db(dbName);
        result = await callback(null, db);
    } catch (err) {
        console.log(err.stack);
        callback(err);
    }

    if (client) {
        client.close();
    }
    return result;
}
