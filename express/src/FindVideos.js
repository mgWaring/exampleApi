'use strict'
const { google } = require('googleapis')
const secrets = require('../config/secrets.json')
const youtube = google.youtube({
    version: 'v3',
    auth: secrets.ytApiKey
})  

module.exports = (filter) => {
    return new Promise((resolve, reject) => {      
        let params = {
            part: filter.part,
            forUsername: filter.name
        }
        //yotube
        resolve(params);
    })
}
