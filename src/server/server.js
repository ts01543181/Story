let express = require('express')
let app = express()
let router = require('./router')

const PORT = process.env.PORT || 3000;
// app.use(express.static(path.join(__dirname, '../client')));
// // app.use('/', router)

// app.get('*', function (req, res) {
//   res.sendFile(path.join(__dirname, '../client/index.html'));
// });


const server = app.listen(PORT, () => {
  console.log('Listening on port 3000...')
})
