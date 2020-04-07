'use strict';

const express = require('express');
const fs = require('fs')
const secrets = require('../config/secrets.json')
const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'mysql_db',
    user: 'mydb_user',
    password: secrets.dbPass,
    database: 'mydb',
})

//mine
const hydrateFilters = require('./HydrateFilters')
const findVideos = require('./FindVideos')
const restructureData = require('./RestructureData')
const prepareSql = require('./PrepareSql')
const buildResponse = require('./BuildResponse')
const htmlWrap = require('./HtmlWrap')
const htmlError = require('./HtmlWrap')

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
    res.send(htmlWrap('Hello World from Max\'s Express server'));
});

app.get('/save', (req, res) => {
    fs.promises.readFile(__dirname + '/search_filter', 'utf8')
        .then(file => hydrateFilters(file))
        .then(filters => findVideos(filters))
        .then(videos => restructureData(videos))
        .then(data => prepareSql(data))
        .then(params => mysql.format(params.sql, params.params))
        .then(sql => connection.query(sql))
        .then(result => buildResponse(result))
        .then(response => htmlWrap(response))
        .then(message => res.send(message))
        .catch((e) => res.send(htmlError(`error: ${JSON.stringify(e)}`)))
})

app.listen(PORT, HOST);
console.log(`mgwaring0 is running on http://${HOST}:${PORT}`);
module.exports = app;