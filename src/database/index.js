const Sequelize = require('sequelize')
const dbConfig =  require('../config/database')

const Visitantes = require('../Models/Visitantes')

const connection = new Sequelize(dbConfig);

Visitantes.init(connection)

module.exports = connection;