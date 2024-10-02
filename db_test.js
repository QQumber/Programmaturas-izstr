require('dotenv').config();

const { Client } = require('pg');

const client = new Client({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT
});

client.connect();

test_data = [
    { id: 1, name: 'Alice' }, 
    { id: 2, name: 'Bob' }
];

const getData = async () => {
    const db_data = await client.query('SELECT * FROM car');
    return db_data.rows;
}

module.exports = {
    test_data,
    getData
};