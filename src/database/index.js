const Sequelize = require('sequelize')
const dbConfig =  require('../config/database')

const Visitantes = require('../Models/Visitantes')

const connection = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect:"mysql"
    },
);
connection({
    define: {
        timestamps: true, //define BD sempre criar created_at updated_at
        underscored: true, // define padrão do BD como snake_case
    }
})
Visitantes.init(connection)

module.exports = connection;