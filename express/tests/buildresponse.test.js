const test = require('tape')
const buildResponse = require('../src/BuildResponse')

const input = {
    result: 'success',
    fields: 'some fields'
}

const expected = {
    message: `Videos Saved`
}

//we will replace this with a dedicated frontend app in due course
test('Test we build a response', t => {
    t.deepEqual(buildResponse(input), expected)
    t.end()
})