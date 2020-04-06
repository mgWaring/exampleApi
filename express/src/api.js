'use strict';

const express = require('express');
const fs = require('fs')
const secrets = require('../config/secrets.json')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'mydb_user',
    password: secrets.dbPass,
    database: 'mydb'
})


//mine
const videoFinder = require('./FindVideos')
const hydrateFilters = require('./HydrateFilters')

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
    res.send('Hello World from Docker');
});

app.get('/save', (req, res) => {
    connection.connect()

    fs.readFile('search_filter', 'utf8')
    .then(file => hydrateFilters(file))
    .then(filters => findVideos(filters))
    .then(videos => saveVideos(videos))
    .then(query => connection.query(query.sql, query.params, query.callback))
    .then(result => buildResponse(result))
    .then(response => htmlWrap(response))
    .then(payload => {
        connection.end()
        res.send(payload)})
    .catch( (error) => {
        console.error(error)
        return errorWrap(error)
    })
})

app.listen(PORT, HOST);
console.log(`mgwaring0 is running on http://${HOST}:${PORT}`);
module.exports = app;