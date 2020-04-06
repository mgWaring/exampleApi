'use strict'
const { google } = require('googleapis')
const secrets = require('../config/secrets.json')

module.exports = (filter) => {
    return new Promise((resolve, reject) => {
        const youtube = google.youtube({
            version: 'v3',
            auth: secrets.ytApiKey
        })
        let params = {
            part: filter.part,
            forUsername: filter.name
        }
        resolve(params);
    })
}
