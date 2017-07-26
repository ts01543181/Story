let express = require('express')
let router = require('./router')
let path = require('path')

const PORT = process.env.PORT || 3000;

// let app = express()
const app = express()
  .use(express.static(path.join(__dirname, '../client')));

// app.use('/', router)

// app.get('*', function (req, res) {
//   res.sendFile(path.join(__dirname, '../client/index.html'));
// });


const server = app.listen(PORT, () => {
  console.log('Listening on port 3000...')
})
