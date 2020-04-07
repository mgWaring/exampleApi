const test = require('tape')
const methodUnderTest = require('../src/FindVideos')

const input = {
    filters: ['part','other'],
    ids: ['name','other']
}

const expected = {
    part: 'part',
    forUsername: 'name'
}

test('Test params are passed nicely', t => {
    methodUnderTest(input)
    .then(result =>{ 
        console.log(result)
        t.deepEqual(result, expected)})
    t.end()
})