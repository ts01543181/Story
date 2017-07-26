let express = require('express')
let router = express.Router()
let fs = require('fs')
let path = require('path')
let index = require('../client/index.html')


// app.get('*', function (req, res) {
//   res.sendFile(path.join(__dirname, '../client/index.html'));
// });

// router.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname + '../client/index.html'));
// })



module.exports = router