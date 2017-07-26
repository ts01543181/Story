const db = require('../db');

module.exports = {
  fetchEntry: (req, res) => {
    db.StoriesList.findAll({
      where: {
        list_id: req.params.list_id,
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
  creatEntry: (req, res) => {
    db.Entry.findOrCreate({
      where: {
        name: req.body.name,
      }
    })
      .spread((newEntry, created) => {
        if (created) {
          res.status(200).send(newList);
          console.log('SUCCESSFULLY CREATED ALL Entries');
        } else {
          res.status(500).send('Entry ALREADY EXISTS');
          consoe.log('Entry ALREADY EXISTS');
        }
      })
      .catch(error => {
        res.status(500).send(error);
        console.log('ERROR IN CREATING Entries');
      })
  }
}
