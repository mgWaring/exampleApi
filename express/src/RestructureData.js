'use strict'

module.exports = (videos) => {
    return videos.reduce((tally, current) => {
        tally.push([(current.id.videoId), current.snippet.title.slice(0, 99), current.snippet.publishedAt])
        return tally
    }, []);
}