const MongoClient = require('mongodb').MongoClient
var express = require('express')
var app = express()


//27017
var db
app.get('/', function (req, res) {

  MongoClient.connect('mongodb://localhost:27017/testdb', (err, database) => {
    db = database
    db.collection('person').find({"name":"dana"}).toArray()
    .then(function(shitReturned){
      console.log(shitReturned[0].name);
      var nameReturned = shitReturned[0].name;

      res.send('<p>ZZZFuckXXXHello World!</p>'+nameReturned)

      callback(shitReturned);

    })
    //db.collection('quotes').save
    // console.log(db.collection('person').find({"name":"dana"}).toArray())
  // ... do something here
  })

  // res.send('ZZZFuckXXXHello World!\n'+nameReturned)
})

app.get('/shit', function (req, res) {
  res.send('SSSSshit page:)')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})