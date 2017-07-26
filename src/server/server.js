let express = require('express')
let path = require('path')

const PORT = process.env.PORT || 3000;

const app = express()
  .use(express.static(path.join(__dirname, '../client')));

app.get('/', (req, res) => {
  console.log('GET REQUEST HAPPENING')
  res.sendFile(path.join(__dirname, '../client/index.html'));
})
app.get('/client/app/styles/styles.css', (req, res) => {
  console.log('GET REQUEST HAPPENING')
  res.sendFile(path.join(__dirname, '../client/app/styles/styles.css'));
})
app.get('/client/app/lib/shutterShockSearch.js', (req, res) => {
  console.log('GET REQUEST HAPPENING')
  res.sendFile(path.join(__dirname, '../client/app/lib/shutterShockSearch.js'));
})
app.get('/client/app/data/storyData.js', (req, res) => {
  console.log('GET REQUEST HAPPENING')
  res.sendFile(path.join(__dirname, '../client/app/data/storyData.js'));
})
app.get('/client/app/config/config.js', (req, res) => {
  console.log('GET REQUEST HAPPENING')
  res.sendFile(path.join(__dirname, '../client/app/config/config.js'));
})

const server = app.listen(PORT, () => {
  console.log('Listening on port 3000...')
})
