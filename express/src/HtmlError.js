'use strict'

module.exports = (message) => {
    return (
        `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Example Server Response</title>
</head>
<body>
 <div style="width:60%;margin:auto;padding:20px;border:solid 5px indianred;border-radius:20px;word-wrap: break-word;">
 <p>${message}
 </div>
</body>
</html>`
    )
}