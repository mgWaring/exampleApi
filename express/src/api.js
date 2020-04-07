'use strict';

const express = require('express');
const fs = require('fs')
const secrets = require('../config/secrets.json')
const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'mydb_user',
    password: secrets.dbPass,
    database: 'mydb'
})



//mine
const hydrateFilters = require('./HydrateFilters')
const findVideos = require('./FindVideos')
const restructureData = require('./RestructureData')
const prepareSql = require('./PrepareSql')
const buildResponse = require('./BuildResponse')
const htmlWrap = require('./HtmlWrap')

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
    res.send(htmlWrap({ message: 'Hello World from Max\'s Express server' }));
});

app.get('/save', (req, res) => {
    connection.connect((err) => err ? console.error('Error connecting: ' + err.stack):console.log('Connected'))

    fs.promises.readFile(__dirname + '/search_filter', 'utf8')
        .then(file => hydrateFilters(file))
        .then(filters => findVideos(filters))
        .then(videos => restructureData(videos))
        .then(data => prepareSql(data))
        .then(query => connection.query(query.sql, query.params, (e,r,f)=> {
            if(e){
                console.log("SQL ERROR:\n", e)
            }
            console.log("SQL Response:\n", r)
        }))
        //connection.end()
        /*
        .then(result => buildResponse(result))
        .then(response => htmlWrap(response))
        */
        .then(payload => {
            console.log("_______\n",payload)
            //connection.end()
            res.send(htmlWrap({ message: JSON.stringify(payload)}))
        })
        .catch((error) => {
            console.error(error)
            res.send(htmlWrap({ message: `error: ${JSON.stringify(error)}` }))
        })        
        
})

app.listen(PORT, HOST);
console.log(`mgwaring0 is running on http://${HOST}:${PORT}`);
module.exports = app;