const express = require('express')
const app = express()
// const http = require('http')
// const fs = require('fs')
const path = require('path')
// const data = require('./data/products');
// const qs = require('querystring')
// const {google} = require('googleapis');

app.use(function (req, res, next) {
  console.log(`${req.method} request for ${req.url}`)
  next()
});

app.use(express.static('./public'))
app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist')))
app.use('/jqueryScript', express.static(path.join(__dirname, 'node_modules/jquery/dist/jquery.min.js')))
app.use('/config', express.static(path.join(__dirname, 'config.json')))

app.get('/', function (req, res) {

  res.sendFile(__dirname + '/public/index.html')

  res.sendFile(path.join(__dirname, '/public/index.html'))
})

app.set('port', (process.env.PORT || 3000))
app.listen(app.get('port'), function () {
  console.log('Server is running on port ' + app.get('port'))
})

