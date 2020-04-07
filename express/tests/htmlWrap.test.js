const test = require('tape')
const htmlWrap = require('../src/HtmlWrap')

const input = {
    message: 'success'
}

const expected = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Example Server Response</title>
</head>
<body>
 <div>
 <p>success
 </div>
</body>
</html>`

//we will replace this with a dedicated frontend app in due course
test('Test we build a response', t => {
    t.deepEqual(htmlWrap(input), expected)
    t.end()
})