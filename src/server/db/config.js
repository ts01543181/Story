// create connection to db
const Sequelize = require('sequelize');

const db = new Sequelize('postgres://hsixjvur:we9-VpdebenxlMw-Woh6D1_NXTT4DsYw@pellefant.db.elephantsql.com:5432/hsixjvur', {
  dialect: 'postgres',
});

console.log('CONNECTED TO REMOTE DB')

module.exports = db;
