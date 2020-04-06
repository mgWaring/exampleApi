'use strict'
const { google } = require('googleapis')

module.exports = async (filter) => {
    const youtube = google.youtube({
        version: 'v3',
        auth: 'AIzaSyD_cioYFDIM0kJWR0l57MkYdQ2wEfqCRhc'
    })
    let params = {
        part: 'contentDetails',
        forUsername: 'GlobalCyclingNetwork'
    }
    let res = await youtube.search.list(params)
    return res;
}