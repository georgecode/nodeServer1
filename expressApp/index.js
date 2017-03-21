var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('ZZZFuckXXXHello World!')
})

app.get('/shit', function (req, res) {
  res.send('shit page:)')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})