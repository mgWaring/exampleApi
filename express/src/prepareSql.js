'use strict'

const mysql = require('mysql')
const callback = (error, result, fields) => {
    if(error) throw error
    return {result: result, fields:fields}
}

module.exports = (videos) => {
    return new Promise((resolve, reject) => {
        resolve({
            sql: 'INSERT INTO ? VALUES ?',
            params: ['mydb', videos],
            callback : callback
        })
    })
}