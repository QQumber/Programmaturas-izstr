require('dotenv').config();

const express = require('express');
const app = express();
const { readFile } = require('fs').promises;
const db = require('./db_test');

app.use(express.static(__dirname + '/public'));

app.get('/', async (request, response) => {

    response.send( await readFile('./public/home.html', 'utf8') );

});

app.get('/test', async (request, response) => {
    response.json(process.env.TEST);
});

app.get('/db', async (request, response) => {
    const data = await db.getData();
    response.json(data);
});

app.listen(process.env.PORT || 3000, () => console.log(`App available on http://localhost:3000`))