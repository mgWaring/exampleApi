'use strict';

const express = require('express');
const fs = require('fs')
const videoFinder = require('./FindVideos')

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
    res.send('Hello World War 3 From Docker');
});

app.get('/save', (req, res) => {
    fs.readFile('search_filter', 'utf8')
    .then(file => hydrateFilters(file))
    .then(filters => findVideos(filters))
    .then(videos => saveVideos(videos))
    .then(result => buildResponse(result))
    .then(response => htmlWrap(response))
    .then(payload => res.send(payload))
    .catch( (error) => {
        console.error(error)
        return errorWrap(error)
    })
})

app.listen(PORT, HOST);
console.log(`mgwaring0 is running on http://${HOST}:${PORT}`);
module.exports = app;