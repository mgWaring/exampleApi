const test = require('tape')
const buildResponse = require('../src/BuildResponse')

const input = true

const expected = true

test('Test we build a response', t => {
    t.deepEqual(buildResponse(input), expected)
    t.end()
})