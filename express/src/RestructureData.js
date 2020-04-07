'use strict'

module.exports = (videos) => {
    return videos.reduce((tally, current) => {
        tally.push([
            current.snippet.title.slice(0, 99), 
            current.snippet.publishedAt.replace('T',' ').substring(0,18)
        ])
        return tally
    }, []);
}