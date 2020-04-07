'use strict'
const { google } = require('googleapis')
const secrets = require('../config/secrets.json')
const youtube = google.youtube({
    version: 'v3',
    auth: secrets.ytApiKey
})

const getIds = async () => {
    let ids = []
    for (let name of secrets.channelNames) {
        const response = await youtube.channels.list({ part: 'id', forUsername: name })
        if (response.data.items.length > 0) {
            ids.push(response.data.items[0].id)
        }
    }
    return ids;
}

module.exports = async (filters) => {
    const ids = await getIds()
    let videos = []
    for (let id of ids) {
        let params = {
            part: 'snippet',
            q: filters.join('|'),
            type: 'video',
            maxResults: 50,
            channelId: id
        }
        const response = await youtube.search.list(params)
        if (response.data.items.length > 0) {
            videos.push(...response.data.items)
        }
    }
    return new Promise((resolve) => {
        resolve(videos);
    })
}
