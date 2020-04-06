const test = require('tape')
const methodUnderTest = require('../src/FindVideos')

const input = {
    part: 'part',
    name: 'name'
}

const expected = {
    part: 'part',
    forUsername: 'name'
}

test('Test params are passed nicely', t => {
    methodUnderTest(input)
    .then(result => t.deepEqual(result, expected))
    t.end()
})