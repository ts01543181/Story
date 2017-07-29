const router = require('express').Router();
let express = require('express')
let path = require('path')
const controller = require('./controller/listController.js');

// INITIALIZING FILE REQUESTS

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
})
router.get('/client/app/styles/styles.css', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/app/styles/styles.css'));
})
router.get('/client/app/lib/shutterShockSearch.js', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/app/lib/shutterShockSearch.js'));
})
router.get('/client/app/data/storyData.js', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/app/data/storyData.js'));
})
router.get('/client/app/config/config.js', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/app/config/config.js'));
})

// POST REQUESTS COMING IN FOR POSTING STORIES
router.post('/', controller.createLists)

// GET REQUEST COMING IN FOR GETTING ALL STORIES
router.get('/getAllStories', controller.fetchLists)

// PUT REQUEST FOR DELETING STORIES
router.put('/delete', controller.deleteLists)

router.post('/signup', controller.createUser)

router.post('/login', controller.checkCredentials)

module.exports = router;
