const test =require('tape')
const hydrateFilters = require('../src/HydrateFilters')

const input = `
filter1
filter2
filter three has spaces
`
const expected = [
    'filter1',
    'filter2',
    'filter three has spaces'
]

test('Test string is split by line ends', t => {
    t.deepEqual(hydrateFilters(input), expected)
    t.end()
})