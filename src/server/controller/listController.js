const db = require('../db');

module.exports = {
  fetchLists: (req, res) => {
    db.StoriesList.findAll({
      where: {
        username: req.params.username
      }
    })
      .then(data => {
        res.status(200).send(data);
        console.log('SUCCESSFULLY FETCHED ALL LISTS')
      })
      .catch(error => {
        res.status(500).send(error);
        console.log('ERROR IN FETCHING LISTS')
      })
  },
  createLists: (req, res) => {
    console.log(req.body)
    db.StoriesList.findOrCreate({
      where: {
        title: JSON.stringify(req.body.title),
        story: JSON.stringify(req.body.storyLine),
        username: req.body.username
      }
    })
      .spread((newList, created) => {
        if (created) {
          res.status(200).send(newList);
          console.log('SUCCESSFULLY CREATED ALL LISTS');
        } else {
          res.status(500).send('LIST ALREADY EXISTS');
          console.log('LIST ALREADY EXISTS');
        }
      })
      .catch(error => {
        res.status(500).send(error);
        console.log('ERROR IN CREATING LISTS', error);
      })
  },
  deleteLists: (req, res) => {
    db.StoriesList.destroy({
      where: {
        title: req.body.title,
        story: req.body.story,
      },
      cascade: true,
    })
    .catch(error => {
      res.status(500).send(error);
      console.log('ERROR IN DELETING LISTS', error);
    })
  },
  createUser: (req, res) => {
    db.User.findOrCreate({
      where: {
        username: req.body.username,
        password: req.body.password
      }
    })
  },
  checkCredentials: (req, res) => {
    db.User.find({
      where: {
        username: req.body.username,
        password: req.body.password
      }
    }).then(data => {
      if (data) {
        return res.send('success')
      } 
      return res.send('fail')
    })
  }
}
