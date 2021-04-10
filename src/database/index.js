const Sequelize = require('sequelize')
const configDB = require('../config/database')
const Visitantes = require('../Models/Visitantes')

const connection = new Sequelize(configDB)
Visitantes.init(connection)

module.exports = connection;