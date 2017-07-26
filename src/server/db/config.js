// create connection to db

const Sequelize = require('sequelize');

const db = new Sequelize('postgres://wsrzrmuq:HLLayzgrWSzH17hJNz-9aH0lW5qRvamZ@stampy.db.elephantsql.com:5432/wsrzrmuq', {
  dialect: 'postgres',
});

console.log('CONNECTED TO REMOTE DB')

module.exports = db;
