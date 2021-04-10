const Sequelize = require('sequelize')
const configDB = require('../config/database')
const Visitantes = require('../Models/Visitantes')
const Visitas = require('../Models/Visitas')

const connection = new Sequelize(configDB);

Visitantes.init(connection);
Visitas.init(connection);

module.exports = connection;