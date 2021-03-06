const db = require('./config')
const Sequelize = require('sequelize');

// create some models and the db
// Will plural the vars for you
const StoriesList = db.define('StoriesList', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  story: {
    type: Sequelize.TEXT('long'),
    allowNull: false,
  },
  username: {
    type: Sequelize.STRING,
    allowNull:false
  }
})

const User = db.define('User', {
  username: {
    type:Sequelize.STRING,
    allowNull:false
  },
  password: {
    type:Sequelize.TEXT,
    allowNull:false
  }
})

//
// const Entry = db.define('entry', {
//   story: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },
// })

// create some relationships
// // Establishing foreign keys, every has many needs to have a corresponding belongs to
// Entry.belongsTo(StoriesList, { foreignKey: {name: 'list_id', allowNull: false }, onDelete: 'CASCADE' });
// StoriesList.hasMany(Entry, { foreignKey: {name: 'list_id', allowNull: false }, onDelete: 'CASCADE' });

// sync up database, which will create the table CREATE TABLE
db.sync()
// Entry.sync()

// export
module.exports = {
  StoriesList,
  User
  // Entry: Entry,
}

// Remember to run this file with node
