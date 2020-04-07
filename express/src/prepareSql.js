'use strict'

const callback = (error, result, fields) => {
    if(error) throw error
    return {result: result, fields:fields}
}

module.exports = (videos) => {
    console.log(videos)
    return new Promise((resolve) => {
        resolve({
            sql: 'INSERT INTO ? VALUES ?',
            params: ['videos', videos],
            callback : callback
        })
    })
}