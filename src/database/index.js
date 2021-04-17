const Sequelize = require("sequelize");
const configDB = require("../config/database");

const Visitantes = require("../models/Visitors");
const Visitas = require("../models/Visits");

const connection = new Sequelize(configDB);

Visitantes.init(connection);
Visitas.init(connection);

module.exports = connection;
