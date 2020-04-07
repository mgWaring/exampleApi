const test = require('tape')
const prepareSql = require('../src/PrepareSql')

const input = [
    [
        'id01',
        'somedata'
    ]
]

const expected = {
    sql: 'INSERT INTO ? VALUES ?',
    params: ['mydb', input]
}

test('Test we get nice response from saving', t => {
    prepareSql(input)
    .then(result => t.deepEquals([result.params, result.sql], [expected.params, expected.sql]))
    t.end()
})