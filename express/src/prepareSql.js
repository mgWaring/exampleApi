'use strict'

const callback = (error, result, fields) => {
    if(error) throw error
    return {result: result, fields:fields}
}

module.exports = (videos) => {
    return new Promise((resolve) => {
        resolve({
            sql: 'INSERT INTO videos (title,date) VALUES ?',
            params: [videos],
            callback : callback
        })
    })
}