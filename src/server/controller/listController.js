const db = require('../db');

module.exports = {
  fetchLists: (req, res) => {
    db.StoriesList.findAll({})
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
    db.StoriesList.findOrCreate({
      where: {
        title: JSON.stringify(req.body.title),
        story: JSON.stringify(req.body.storyLine),
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
  }
}
