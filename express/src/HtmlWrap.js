'use strict'

module.exports = (payload) => {
    return (
        `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Example Server Response</title>
</head>
<body>
 <div>
 <p>${payload.message}
 </div>
</body>
</html>`
    )
}